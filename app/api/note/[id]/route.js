import { connectToDB } from "@utils/database";
import Note from "@models/note";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()
        const note = await Note.findById(params.id).populate('author')

        if(!note) return new Response('Note not found', { 
            status: 404
        })

        return new Response(JSON.stringify(note), {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to fetch notes', {
            status: 500
        })
    }
}

export const PATCH = async (request, { params }) => {
    const { note, tag } = await request.json()

    try {
        await connectToDB()

        const existingNote = await Note.findById(params.id)

        if(!existingNote) return new Response('Note not found', {
            status: 404
        })

        existingNote.note = note;
        existingNote.tag = tag;

        await existingNote.save()
        return new Response(JSON.stringify(existingNote), {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to update note', {
            status: 500
        })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB()

        await Note.findByIdAndRemove(params.id)
        alert(
            params.id
        )
        return new Response("Note deleted successfully", {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to delete note', {
            status: 500
        })
    }
}