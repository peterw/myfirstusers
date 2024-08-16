import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, CATEGORIES_QUERY } from '@/sanity/lib/queries';
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from '../../sanity.types';
import HomeArticles from '@/components/homeArticles';

async function getData() {
  const [categories, posts] = await Promise.all([
    client.fetch<CATEGORIES_QUERYResult>(CATEGORIES_QUERY),
    client.fetch<POSTS_QUERYResult>(POSTS_QUERY, {
      categorySlug: null,
    }),
  ]);
  // TODO get data from sanity
  return { categories, posts };
}

const MarketingDashboard = async () => {
  const { categories, posts } = await getData();
  return (
    <div className="p-4 min-h-screen">
      <HomeArticles categories={categories} posts={posts} />
    </div>
  );
};

export default MarketingDashboard;
