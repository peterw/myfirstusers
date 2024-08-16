import { ArticleProps } from '@/app/@modal/(.)article/[slug]/page';

const ContentPage = ({ title, duration, tag }: ArticleProps) => {
  return (
    <>
      <p>Duration: {duration}</p>
      <p>Tag: {tag}</p>
    </>
  );
};

export default ContentPage;
