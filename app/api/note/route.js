import { connectToDB } from "@utils/database";
import Note from "@models/note";

export const GET = async (request) => {
    try {
        await connectToDB()
        const notes = await Note.find({}).populate('author')

        return new Response(JSON.stringify(notes), {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to fetch notes', {
            status: 500
        })
    }
}