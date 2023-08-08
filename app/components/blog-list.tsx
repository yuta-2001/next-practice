import type { Database } from '../../database.types'

type Blog = Database['public']['Tables']['blogs']['Row']

async function fetchBlogs() {
  await new Promise((resolve) => setTimeout(resolve, 6000))
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'no-store',
    // next: { revalidate: 10 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch notes in server')
  }
  const blogs: Blog[] = await res.json()
  return blogs
}

export default async function BlogList() {
  const blogs = await fetchBlogs()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul className="m-3">
        {blogs.map((blog) => (
          <li key={blog.id} className="my-1 text-base">
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  )
}