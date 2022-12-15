"use client";

import { usePreview } from "../lib/sanity.preview";
import BlogList from "./ui/BlogList";

type PreviewBlogListProps = {
  query: string;
};

const PreviewBlogList = ({ query }: PreviewBlogListProps) => {
  const posts = usePreview(null, query);
  return (
    <div>
      Preview Mode
      <BlogList posts={posts} />
    </div>
  );
};

export default PreviewBlogList;
