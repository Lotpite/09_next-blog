"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'


import Form from '@components/Form'

const EditNote = () => {

    const router = useRouter();
    const searchParams = useSearchParams()
    const noteId = searchParams.get('id')
    const [submitting, setSubmitting] = useState(false)

    const [post, setPost] = useState({
        note: '',
        tag: ''
    })

    useEffect(() => {
        const getNoteDetails = async () => {
            const response = await fetch(`/api/note/${noteId}`)
            const data = await response.json()

            setPost({
                note: data.note,
                tag: data.tag
            })
        }

        if(noteId) getNoteDetails()
    }, [noteId])

    const updateNote = async (e) => {
        e.preventDefault()

        if(!noteId) return alert('Note ID not found')


        try {
            const response = await fetch(`/api/note/${noteId}`,
            {
                method: 'PATCH',
                body: JSON.stringify({
                    note: post.note,
                    tag: post.tag
                })
            })

            if(response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log('Error is:', error)
        } finally {
            setSubmitting(false)
        }
    }

  return (
    <Form 
        type='Edit'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updateNote}
        />
  )
}

export default EditNote