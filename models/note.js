import { Schema, model, models} from "mongoose";

const NoteSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    note: {
        type: String,
        required: [true, 'Note is required']
    },
    tag: {
        type: String,
        required: [true, 'Tag is required']
    }
})

const Note = models.Note || model('Note', NoteSchema)

export default Note