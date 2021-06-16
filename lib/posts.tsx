import path from 'path'
import fs, { promises as fsPromises } from 'fs'
import matter from 'gray-matter'

const markdownDir = path.join(process.cwd(), 'markdown')

export const getPosts = async () => {
  const fileNames = await fsPromises.readdir(markdownDir)
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md/g, '')
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
  const fullPath = path.join(markdownDir, id)
  const text = fs.readFileSync(fullPath, 'utf-8')
  const {
    data: { title, date },
    content,
  } = matter(text)

  return { id, title, date, content }
}
