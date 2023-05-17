import { connectToDB } from "@utils/database";
import Note from "@models/note";

export const POST = async (req, res) => {
    const { userId, note, tag } = await req.json();

    try {
        await connectToDB()
        const newNote = new Note({ 
            author: userId, 
            note,
            tag
        })

        await newNote.save()
        
        return new Response(JSON.stringify(newNote), {
            status: 201
        })
    } catch (error) {
        return new Response('Failed to create new note', {
            status: 500
        })
    }
}
