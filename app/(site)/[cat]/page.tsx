import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, CATEGORIES_QUERY } from '@/sanity/lib/queries';
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from '@/sanity.types';
import HomeArticles from '@/components/homeArticles';
const revalidate = 60;

async function getData(categorySlug: string) {
  const [categories, posts] = await Promise.all([
    client.fetch<CATEGORIES_QUERYResult>(
      CATEGORIES_QUERY,
      {},
      {
        next: {
          revalidate,
        },
      }
    ),
    client.fetch<POSTS_QUERYResult>(
      POSTS_QUERY,
      {
        categorySlug,
      },
      {
        next: {
          revalidate,
        },
      }
    ),
  ]);
  return { categories, posts };
}

const CategoryPage = async ({ params }: { params: { cat: string } }) => {
  const { categories, posts } = await getData(params.cat);
  return (
    <div className="p-4 min-h-screen">
      <HomeArticles categories={categories} posts={posts} />
    </div>
  );
};

export default CategoryPage;
