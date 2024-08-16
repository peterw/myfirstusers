import Link from 'next/link';
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from '@/sanity.types';
import { Card } from '@/components/ui/card';
import { urlForImage, Image } from '@/components/SanityImage';

export default function HomeArticles({
  categories,
  posts,
}: {
  categories: CATEGORIES_QUERYResult;
  posts: POSTS_QUERYResult;
}) {
  console.log(posts);
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
                <Link
                  key={cat._id}
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                    true
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                  href={`/${cat?.slug?.current}`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          console.log(post.mainImage?.asset);
          return (
            <Link
              key={`post-${post._id}`}
              href={`/article/${post?.slug?.current}`}
            >
              {/* <div
                className="block max-w-sm rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700"
                style={{
                  backgroundImage: `url(${post.mainImage && urlForImage(post.mainImage)})`,
                }}
              >
                <h2 className="mb-2 text-xl font-medium">{post.title}</h2>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{post.duration}</span>
                </div>
              </div> */}
              <Card
                className="w-full rounded-lg overflow-hidden bg-cover bg-center shadow-lg transition-all hover:scale-[1.02]"
                style={{
                  backgroundImage: `url("${post.mainImage && urlForImage(post.mainImage)}")`,
                }}
              >
                <div className="bg-black/50 p-6 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    Exploring the Wonders of Nature
                  </h3>
                  <div className="flex items-center gap-2 text-white text-sm">
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
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>2 hours</span>
                  </div>
                  <div className="self-end rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                    Nature
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
