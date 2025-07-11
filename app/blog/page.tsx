'use client'

import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog.json'

export default function BlogPage() {
  const categories = ['All', ...Array.from(new Set(blogData.map(post => post.category)))]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay informed with the latest health tips, medical insights, and wellness advice from our expert medical professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}