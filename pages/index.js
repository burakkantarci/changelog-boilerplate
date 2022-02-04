import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Header from './header'

export default function Home({ posts }) {
  return (
    <div className='bg-gray-50 h-screen'>
      <Header />
      <div className='w-2/3 mx-auto'>
        {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <div className="w-full shadow-md shadow-slate-200 rounded-md bg-white p-8 mt-6 cursor-pointer">
              <div className='flex'>
                <div className='text-xs text-gray-400 mt-1 w-36'>{post.frontMatter.date}</div>
                <div className='w-full ml-4'>
                  <span className='block text-xl text-slate-700 font-bold'>{post.frontMatter.title}</span>
                  <span className='block text-md text-gray-500 py-2'>{post.frontMatter.description}</span>
                  <span className='px-2 py-1 my-2 inline-block font-semibold rounded-full border-2 border-blue-600 bg-blue-50 text-blue-600 text-xs mr-2'>Foresight</span>
                  <span className='px-2 py-1 my-2 inline-block font-semibold rounded-full border-2 text-gray-500 text-xs'>Improvement</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}