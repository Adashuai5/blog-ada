import path from 'path'
import fs, { promises as fsPromises } from 'fs'
import matter from 'gray-matter'
import marked from 'marked'

const markdownDir = path.join(process.cwd(), 'markdown')

export const getPosts = async () => {
  const fileNames = await fsPromises.readdir(markdownDir)
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/g, '')
    const fullPath = path.join(markdownDir, fileName)
    const text = fs.readFileSync(fullPath, 'utf-8')
    const {
      data: { title, date },
      content,
    } = matter(text)

    return { id, title, date, content }
  })

  return posts
}

export const getPost = async (id: string) => {
  const fullPath = path.join(markdownDir, id + '.md')
  const text = fs.readFileSync(fullPath, 'utf-8')
  const {
    data: { title, date },
    content,
  } = matter(text)
  const htmlContent = marked(content)

  return JSON.parse(
    JSON.stringify({
      id,
      title,
      date,
      content,
      htmlContent,
    })
  )
}

export const getPostIds = async () => {
  const fileNames = await fsPromises.readdir(markdownDir)
  return fileNames.map((fileName) => fileName.replace(/\.md$/g, ''))
}
