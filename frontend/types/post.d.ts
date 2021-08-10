
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export type BlogProps = {
  posts: PostType[]
}

export type PostProps = {
  post: PostType
}

export type PostIdStaticParams = {
  params: {
    id: string;
  }
}
