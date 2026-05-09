import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export const navItems = [
  { slug: 'index', label: 'KB Index', file: 'index.md' },
  { slug: '01-spain-europe', label: 'Spain & Europe Intel', file: '01-spain-europe.md' },
  { slug: '02-industry-history', label: 'Industry History', file: '02-industry-history.md' },
  { slug: '03-india-market', label: 'India Market', file: '03-india-market.md' },
  { slug: '04-europe-market', label: 'Europe Market', file: '04-europe-market.md' },
  { slug: '05-usa-market', label: 'USA Market', file: '05-usa-market.md' },
  { slug: '06-technical', label: 'Technical Foundations', file: '06-technical.md' },
  { slug: '07-consumer-research', label: 'Consumer Research', file: '07-consumer-research.md' },
  { slug: '08-supply-chain', label: 'Supply Chain', file: '08-supply-chain.md' },
]

export function getDocBySlug(slug) {
  const item = navItems.find((n) => n.slug === slug)
  if (!item) return null
  const filePath = path.join(contentDir, item.file)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(raw)
  return { slug, label: item.label, content }
}

export function getAllSlugs() {
  return navItems.map((n) => n.slug)
}
