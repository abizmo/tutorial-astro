import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET() {
  const posts = await getCollection('posts')

  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
      pubDate: post.data.pubDate
    })),
    customData: `<language>en-us</language>`
  })
}
