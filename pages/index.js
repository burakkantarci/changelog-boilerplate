import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Header from './header'
import { compareAsc, format } from 'date-fns'

export default function Home({ posts }) {
  return (
    <div className='bg-gray-50 h-full'>
      <Header />
      <div className='w-2/3 mx-auto pt-24'>
        {posts.slice(0).reverse().map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <div className="w-full block shadow-md shadow-slate-200 rounded-md bg-white p-8 mb-6 cursor-pointer ease-in-out duration-100
              hover:scale-105 hover:shadow-xl
            ">
              <div className='flex'>
                <div className='text-xs text-gray-400 mt-1 w-36'>
                  {convertDate(post.frontMatter.date)}
                </div>
                <div className='w-full ml-4'>
                  <div className='flex items-center text-xl text-slate-700 font-bold'>
                    {  getDayDifference(post.frontMatter.date) < 7 ? <span className='p-1 px-2 font-semibold rounded-full bg-red-500 text-white text-xs mr-2'>New</span> : null }
                    {post.frontMatter.title}                   
                  </div>
                  <span className='block text-md text-gray-500 py-2'>{post.frontMatter.description}</span>
                  <span className='py-1 my-2 inline-block font-semibold rounded-full text-blue-600 text-xs mr-2'>Foresight &rarr;</span>
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

export const convertDate = (date) => {
  const convertedDate = new Date(date);
  
  return format(convertedDate, ('MMM dd, yyyy'));
}
export const getDayDifference = (date) => {
  const convertedDate = new Date(date);
  const diff = new Date().getTime() - convertedDate.getTime()
  const diffToFix = diff / (1000 * 60 * 60 * 24);
  
  return diffToFix.toFixed(0);
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