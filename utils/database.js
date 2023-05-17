import mongoose from "mongoose";

let isConnected = false; 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('Connected to mongo')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "note-forgot", //  UrlParser and Topology are true by default (it is not required to set it TRUE)
            useNewUrlParser: true, // his helps ensure that the connection string is parsed correctly and that any changes or updates made to the MongoDB connection string format are properly handled.
            useUnifiedTopology: true, //This engine helps in handling various aspects of connection management, such as server selection, monitoring, and handling of replica set and sharded cluster topologies.
        })

        isConnected = true
        
        console.log('Mongodb connected')
    } catch (error) {
        console.log(error)
    }
}