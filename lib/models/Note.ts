import mongoose, { Schema, models, model } from 'mongoose'

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    x: {
      type: Number,
      default: 40,
      min: 0,
    },
    y: {
      type: Number,
      default: 40,
      min: 0,
    },
  },
  { timestamps: true }
)

export type NoteDoc = mongoose.InferSchemaType<typeof NoteSchema> & {
  _id: mongoose.Types.ObjectId
}

export const Note =
  models.Note || model('Note', NoteSchema)