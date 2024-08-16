'use client';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';

export interface ArticleProps {
  title: string;
  duration: string;
  tag: string;
}

export default function ArticleModal({ title, duration, tag }: ArticleProps) {
  const router = useRouter();
  return (
    <Modal title={title} onClose={() => router.back()}>
      <p>Duration: {duration}</p>
      <p>Tag: {tag}</p>
      {/* TODO: Add more content for the modal here */}
      modal content here
    </Modal>
  );
}
