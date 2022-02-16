import React, { useEffect} from "react";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Header from '../header'
import { compareAsc, format } from 'date-fns'

const components = { SyntaxHighlighter }

const PostPage = ({ frontMatter: { title, date }, mdxSource, format }) => {
  useEffect(() => {
    document.title = title + " - Foresight Changelog";  
  }, []);

  return (
    <div>
      <Header />
      <div className='w-2/3 mx-auto pt-24'>
        <h1 className='text-xl text-slate-700 font-bold'>{title}</h1>
        <span className='text-xs text-gray-400 mt-1'>{convertDate(date)}</span>  
        <div className='mt-4'>
          <MDXRemote {...mdxSource} components={components}/>
        </div>
      </div>
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

const convertDate = (date) => {
  const convertedDate = new Date(date);
  
  return format(convertedDate, ('MMM dd, yyyy'));
}

export { getStaticProps, getStaticPaths }
export default PostPage