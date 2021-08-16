import { Layout } from "../components/Layout" 
import Post from "../components/Post"
import { getAllPostsData } from "../lib/posts"
import {PostListProps } from "../types/post"
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"

export default function Blog({ data }: PostListProps) {
  return (
    <Layout title="Blog">
      <Link href="/main">
        <a className="flex mt-12">
          <ChevronDoubleLeftIcon className="w-5 h-5" /> Back
        </a>
      </Link>
      <ul>
        { data?.results && data?.results.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getAllPostsData();
  return {
    props: { data },
    revalidate: 3,
  }
}