import fetch from "node-fetch";
import { PostDetail, PostType } from "../types/post";

// const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}posts/`

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const data = await res.json();
  return data.results.map((post:PostDetail) => {
    return {
      params: {
        slug: String(post.slug)
      }
    }
  })
}


export async function getPostData(slug:string) {

  const res = await fetch(new URL(`${apiUrl}detail/${slug}`));
  const post = await res.json();
  return {
    post,
  }
}