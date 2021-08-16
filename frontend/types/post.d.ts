import { ListQuery, Pagination } from './pagination';


export type PostDetail = {
  id?: number;
  key?: number;
  title: string;
  slug: string;
  content: string;
  cover_media: PostCoverMedia;
  thumb?: string;
  is_show?: boolean;
  plain_content?: string;
  category: CategoryDetail;
  tag: TagDetail[],
  updated_at?: string;
  created_at?: string;
}

export type PostListProps = {
  data: PostList;
}


export type PostList = Pagination & {
  results: PostDetail[];
  tags: TagDetail[];
  categories: CategoryDetail[];
  tag_name?: string;
  category_name?: string;
  links: {
    next?: string;
    previous?: string;
  },
  media_size: {
    cover: ImageSize;
  }
  count: number;
} | undefined;


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
  post: PostDetail
}

export type PostIdStaticParams = {
  params: {
    slug: string;
  }
}
