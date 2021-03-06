import { Router } from "next/dist/client/router";
import Link from "next/link"
import { Layout } from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import { PostIdStaticParams, PostProps } from "../../types/post";
import { useRouter } from "next/dist/client/router";

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID: "}{post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.content}</p>
      <Link href="/blog/" passHref>
        <div className="flex cursor-pointer mt-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
        <span>Back to blog</span>
        </div>
      </Link>
    </Layout>
  )
}


export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: PostIdStaticParams) {
  const {post} = await getPostData(params.slug);
  return {
    props: {
      post: post.post
    },
    revalidate: 3,
  }
}
