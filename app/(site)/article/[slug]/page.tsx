import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { POST_QUERYResult } from '@/sanity.types';
import Content from './content';

async function getData(slug: string) {
  const post = await client.fetch<POST_QUERYResult>(
    POST_QUERY,
    {
      slug,
    },
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return { post };
}

const ContentPage = async ({ params }: { params: { slug: string } }) => {
  const { post } = await getData(params.slug);
  if (!post) {
    return notFound();
  }
  return (
    <div className="container py-10">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {post.title}
      </h1>
      <Content post={post} />
    </div>
  );
};

export default ContentPage;
