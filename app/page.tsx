import { createNote } from '@/lib/action'
import { Note } from '@/lib/models/Note'
import { dbConnect } from '@/lib/mongodb'


export default async function Home() {
  await dbConnect()

  const notes = await Note.find().sort({ createdAt: -1 })

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Idea Board</h1>

      {/* ✅ FORM */}
      <form action={createNote} className="mb-6 space-y-2">
        <input
          name="title"
          placeholder="Title"
          className="w-full p-2 rounded bg-neutral-800"
        />
        <textarea
          name="content"
          placeholder="Content (use - for bullets)"
          className="w-full p-2 rounded bg-neutral-800"
        />
        <button className="px-4 py-2 bg-white text-black rounded">
          Add Note
        </button>
      </form>

      {/* ✅ NOTES LIST */}
      <div className="space-y-3">
        {notes.map((note: any) => (
          <div
            key={note._id.toString()}
            className="p-4 bg-neutral-900 rounded"
          >
            <h2 className="font-semibold">{note.title}</h2>
            <p className="text-sm text-neutral-400 whitespace-pre-wrap">
              {note.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}