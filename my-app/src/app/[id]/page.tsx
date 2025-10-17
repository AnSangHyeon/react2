import { posts } from "@/lib/data"
import LikeBtn from "../ui/like-btn";

export default async function PostPage({
  params
}: {
  params: Promise<{ id: string}>
}) {
  const { id } = await params;

  const post = posts.find((p) => p.id === id);

  if(!post) {
    return <>게시글 없음</>
  }

  return (
    <>
      <h1>{post.title}</h1>
      <LikeBtn likes={post.likes} />
    </>
  );
}