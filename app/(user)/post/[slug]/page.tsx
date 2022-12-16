import { groq } from "next-sanity";
import Image from "next/image";
import { sanityClient, urlFor } from "../../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "../../../../components/ui/RichTextComponents";

type PostProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 600;

export async function generateStaticParams() {
  const query = groq`
    *[_type=="post"]{
      slug
    }
  `;

  const slugs = await sanityClient.fetch(query);
  const slugRoutes = slugs.map((slug: any) => ({ slug: slug.slug.current }));
  return slugRoutes;
}

const Post = async ({ params: { slug } }: PostProps) => {
  const query = groq`
        * [_type == "post" && slug.current == $slug][0]{
            ...,
            author->,
            categories[]->
        }
    `;

  const post: Post = await sanityClient.fetch(query, { slug });

  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-[#52daf2] text-white'>
        <div
          className='relative min-h-56 flex flex-col justify-between 
            md:flex-row'>
          <div className='absolute w-full h-full top-0 opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className='p-5 bg-[#52daf2] w-full'>
            <div
              className='flex flex-col justify-between gap-y-5
              md:flex-row'>
              <div>
                <h1 className='text-4xl font-extrabold'>{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className='w-64'>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div>{/* Todod author bio */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className='italic pt-10'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <p
                    className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                    key={category._id}>
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
};

export default Post;
