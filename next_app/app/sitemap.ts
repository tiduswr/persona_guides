import { MetadataRoute } from 'next'

const BASE_URL = 'https://persona-guides.harllemnascimento.cloud'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: '',
      priority: 1,
    },
    {
      url: '/demons',
      priority: 0.8,
    },
    {
      url: '/social-links',
      priority: 0.8,
    },
    {
      url: '/exams',
      priority: 0.6,
    },
    {
      url: '/linked-episodes',
      priority: 0.7,
    },
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}