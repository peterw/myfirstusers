import Link from 'next/link';
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from '@/sanity.types';
import { Card } from '@/components/ui/card';
import { urlForImage } from '@/components/SanityImage';
import CategoryLinks from './CategoryLinks';

export default function HomeArticles({
  categories,
  posts,
}: {
  categories: CATEGORIES_QUERYResult;
  posts: POSTS_QUERYResult;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="lg:col-span-1">
        <CategoryLinks categories={categories} />
        <div className="mb-6">
          <h2 className="font-bold text-l italic ">
            <span className="bg-black text-white px-2">NEWSLETTER</span>
          </h2>
          <div className="flex flex-wrap gap-3 rounded-2xl bg-gray-50 px-3 py-5 -mx-3">
            Subscribe to our newsletter
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length === 0 && <>No more posts..</>}
        {posts.map((post) => {
          return (
            <Link
              key={`post-${post._id}`}
              href={`/article/${post?.slug?.current}`}
            >
              <Card
                className="w-full rounded-xl overflow-hidden bg-cover bg-center shadow-lg transition-all h-52 hover:scale-[1.02]"
                style={{
                  backgroundImage: `url("${post.mainImage && urlForImage(post.mainImage)}")`,
                }}
              >
                <div className="bg-black/50 p-6 flex flex-col justify-between gap-4 h-full">
                  <h3 className="text-2xl font-bold text-white">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white text-sm">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="ml-1">{post.duration}</span>
                    </div>
                    <div className="rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2.5 py-0.5 text-sm">
                      {post?.categories?.[0]?.title}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
