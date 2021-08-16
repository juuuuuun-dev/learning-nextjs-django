import { PostProps } from "../types/post";
import Link from "next/link";

export default function Post({post} :PostProps) {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.slug}`} passHref>
        <a className="cursor-point text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </a>
      </Link>
      
    </div>
  )
}
