import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

const PostsIndex: NextPage = () => {
  const [post, setPost] = useState<Post>({})
  useEffect(() => {
    axios.get('/api/v1/posts').then(
      (response) => {
        if (response.data.length === 0) {
          setPost(response.data)
        }
      },
      () => {}
    )
  }, [])
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )
}

export default PostsIndex
