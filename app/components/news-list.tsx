import type { Database } from '../../database.types'
import Counter from './counter'

type News = Database['public']['Tables']['news']['Row']

async function fetchNews() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/news?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'no-store',
    // next: { revalidate: 10 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch notes in server')
  }
  const news: News[] = await res.json()
  return news
}

export default async function NewsList() {
  const news = await fetchNews()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        <Counter />
        News
      </p>
      <ul className="m-3">
        {news.map((news) => (
          <li key={news.id} className="my-1 text-base">
            {news.title}
          </li>
        ))}
      </ul>
    </div>
  )
}