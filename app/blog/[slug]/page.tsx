import { notFound } from 'next/navigation'
import BlogPostContent from './BlogPostContent'
import blogData from '@/data/blog.json'

// This function tells Next.js which dynamic routes to pre-render at build time
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }
  
  return <BlogPostContent post={post} />
}