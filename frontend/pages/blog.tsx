import { Layout } from "../components/Layout" 
import Post from "../components/Post"
import { getAllPostsData } from "../lib/posts"
import { BlogProps } from "../types/post"

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout title="Blog">
      <ul>
        { posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  }
}