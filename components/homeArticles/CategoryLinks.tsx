'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { navState } from '@/lib/state/app';
import { CATEGORIES_QUERYResult } from '@/sanity.types';

const categoryColors = [
  'bg-blue-50',
  'bg-green-50',
  'bg-yellow-50',
  'bg-lime-200',
  'bg-orange-200',
];

export default function CategoryLinks({
  categories,
}: {
  categories: CATEGORIES_QUERYResult;
}) {
  const pathname = usePathname();
  const [isNavShown] = useRecoilState(navState);
  return (
    <div className={`${!isNavShown && 'hidden'} lg:block`}>
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="font-bold text-l italic ">
            <span className="bg-black text-white px-2">{category.title}</span>
          </h2>
          <div className="flex flex-wrap gap-3 rounded-2xl bg-gray-50 px-3 py-5 -mx-3">
            {category.childCats.map((cat, index) => (
              <Link
                key={cat._id}
                className={`px-3 py-1 rounded-full text-sm ${categoryColors[index] ?? 'bg-red-200'} ${pathname === `/${cat?.slug?.current}` ? 'border-2 border-black' : ''}`}
                href={`/${cat?.slug?.current}`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
