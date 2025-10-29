'use client'

import { use } from 'react'

export default function Posts({
  posts,
}: {
  posts: Promise<{ id: string; title: string }[]>
}) {
  const allPosts = use(posts)

  return (
    <ul>
      {allPosts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}