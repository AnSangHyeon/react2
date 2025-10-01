import Link from "next/link";
import { posts } from "./posts";

export default function BlogPage2() {
  return (
    <div>
      <h1>블로그 목록</h1>
      <ul>
        {
          posts.map((posts) => (
            <li key={posts.slug}>
              <Link href={`/blog/${posts.slug}`}>{posts.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}