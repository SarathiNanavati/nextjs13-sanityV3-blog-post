import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/ui/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";

export const revalidate = 600;

const query = groq`
  *[_type =="post" ]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const HomePage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse text-[#52daf2]'>
              Loading Preview Data...
            </p>
          </div>
        }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await sanityClient.fetch(query);
  return <BlogList posts={posts} />;
};

export default HomePage;
