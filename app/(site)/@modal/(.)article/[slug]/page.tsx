import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { POST_QUERYResult } from '@/sanity.types';
import ModalContent from './modal';

async function getData(slug: string) {
  const post = await client.fetch<POST_QUERYResult>(POST_QUERY, {
    slug,
  });
  return { post };
}

export default async function ArticleModal({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);
  const { post } = await getData(params?.slug);
  if (!post) {
    return notFound();
  }
  return <ModalContent post={post} />;
}
