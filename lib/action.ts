'use server'
'use server'

import { dbConnect } from '@/lib/mongodb'

import { revalidatePath } from 'next/cache'
import { Note } from './models/Note'

// ✅ CREATE NOTE
export async function createNote(formData: FormData) {
  await dbConnect()

  const title = formData.get('title') as string
  const content = formData.get('content') as string

  if (!title) return

  await Note.create({
    title,
    content,
  })

  // refresh page data
  revalidatePath('/')
}