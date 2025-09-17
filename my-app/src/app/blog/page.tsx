import { posts } from "./posts";

const Blog = () => {
  return (
    <ol>
      {
        posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))
      }
    </ol>
  );
}

export default Blog;