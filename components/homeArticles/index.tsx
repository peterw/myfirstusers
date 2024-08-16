'use client';
import { useState } from 'react';
import Link from 'next/link';
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from '@/sanity.types';
import { Card } from '../ui/card';

export default function HomeArticles({
  categories,
  posts,
}: {
  categories: CATEGORIES_QUERYResult;
  posts: POSTS_QUERYResult;
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="lg:col-span-1">
        {categories.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-bold text-lg mb-3 text-blue-600">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.childCats.map((cat) => (
                <span
                  key={cat._id}
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                    activeCategory === cat.title
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === cat.title ? null : cat.title
                    )
                  }
                >
                  {cat.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={`post-${post._id}`}
            href={`/article/${post?.slug?.current}`}
          >
            <Card className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-xl shadow-md cursor-pointer">
              <h3 className="font-bold text-lg mb-3 text-blue-600">
                {post.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{post.duration}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
