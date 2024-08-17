import { groq } from 'next-sanity';

export const CATEGORIES_QUERY = groq`*[_type == "category" && !defined(parent)]{
  title,
  slug,
  _id,
  "childCats": *[_type == "category" && parent._ref == ^._id]{
    title,
    slug,
    _id
  }
}`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current) && (!defined($categorySlug) || $categorySlug in categories[]->slug.current)][0...10]{
  _id,
  title,
  slug,
  duration,
  mainImage,
  categories[]-> {
    _id,
    title,
    slug
  }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, description, content, duration, mainImage, publishedAt, categories[]-> {
    _id,
    title,
    slug,
  }
}`;
