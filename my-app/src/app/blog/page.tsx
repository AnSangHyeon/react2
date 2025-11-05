import Posts from '@/app/components/posts'
import { Suspense } from "react";

function getPosts() {
  return fetch('https://api.vercel.app/blog')
    .then((res) => res.json())
}

export default function Page() {
  const posts = getPosts()
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Posts posts={posts} />
      </Suspense>
    );
}