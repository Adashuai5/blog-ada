import React from 'react'
import { getPost, getPostIds } from '../../lib/posts'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

type Props = {
  post: Post
}
const postsShow: NextPage<Props> = (props) => {
  const { post } = props
  return (
    <div>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.htmlContent }}></article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const idList = await getPostIds()
  return {
    paths: idList.map((id) => ({ params: { id: id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (x: any) => {
  const id = x.params.id
  const post = await getPost(id)
  return {
    props: {
      post: post,
    },
  }
}

export default postsShow
