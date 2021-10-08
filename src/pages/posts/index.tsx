type Posts = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface PostsProps {
  posts: Posts[]
}

export function Posts() {
  return <h1>Posts</h1>
}
