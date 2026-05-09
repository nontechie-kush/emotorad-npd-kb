import { getDocBySlug, getAllSlugs, navItems } from '../../../lib/docs'
import { notFound } from 'next/navigation'
import DocPage from '../../../components/DocPage'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const doc = getDocBySlug(params.slug)
  if (!doc) return {}
  return { title: `${doc.label} – e-motorad NPD KB` }
}

export default function Page({ params }) {
  const doc = getDocBySlug(params.slug)
  if (!doc) notFound()
  return <DocPage doc={doc} navItems={navItems} currentSlug={params.slug} />
}
