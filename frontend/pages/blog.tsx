import { Layout } from "../components/Layout" 
import Post from "../components/Post"
import { getAllPostsData } from "../lib/posts"

type BlogProps = {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[]
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <Layout title="Blog">
      <ul>
        { posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  }
}