import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { urlFor } from "../../lib/sanity.client";
import ClientSideRoute from "../ClientSideRoute";

type BlogListProps = {
  posts: Post[];
};

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div>
      <hr className='border-[#52daf2] mb-10' />
      <div
        className='grid grid-cols-1 px-10 gap-x-10 gap-y-16 pb-24
        md:grid-cols-2'>
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className='group cursor-pointer flex flex-col bg-gray-400/20 rounded-lg p-3'>
              <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200'>
                <Image
                  className='object-cover object-left
                lg:object-center'
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div
                  className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg
              text-white p-5 flex justify-between'>
                  <div>
                    <p className='font-bold'>{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                  <div
                    className='flex flex-col gap-y-2 items-center
                    md:flex-row md:gap-x-2'>
                    {post.categories.map((category) => {
                      return (
                        <div
                          key={category._id}
                          className='bg-[#52daf2] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                          <p>{category.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='mt-5 flex-1'>
                <p className='underline text-lg font-bold'>{post.title}</p>
                <p className='text-gray-500 line-clamp-2'>{post.description}</p>
              </div>
              <p className='mt-5 font-bold flex items-center group-hover:underline'>
                Read Post
                <ArrowUpRightIcon className='ml-2 h-4 w-4' />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
