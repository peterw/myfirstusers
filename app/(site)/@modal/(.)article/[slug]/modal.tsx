'use client';
import { PortableText } from '@portabletext/react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import { Image } from '@/components/SanityImage';
import { POST_QUERYResult } from '@/sanity.types';

export default function ModalContent({ post }: { post: POST_QUERYResult }) {
  const router = useRouter();

  return (
    <Modal title={post?.title ?? ''} onClose={() => router.back()}>
      <div className="">
        {post?.mainImage && (
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={post?.mainImage}
              alt={post?.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
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
            <span className="ml-1">{post?.duration}</span>
          </div>
          <div className="rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2.5 py-0.5 text-sm">
            {post?.categories?.[0]?.title}
          </div>
        </div>
        {post?.content && <PortableText value={post?.content} />}
      </div>
    </Modal>
  );
}
