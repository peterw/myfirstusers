import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformImageSource = (
  image: any
):
  | {
      _key?: string | null;
      _type?: string;
      asset: { _type: 'reference'; _ref: string };
      crop: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      } | null;
      hotspot: { x: number; y: number; height: number; width: number } | null;
      caption?: string;
    }
  | undefined => {
  if (!image || !image.asset) return undefined;
  return {
    _key: image._key || null,
    _type: image._type || 'image',
    asset: {
      _type: 'reference',
      _ref: image.asset._ref || image.asset._id,
    },
    crop: image.crop || null,
    hotspot: image.hotspot || null,
    caption: image.caption,
  };
};
