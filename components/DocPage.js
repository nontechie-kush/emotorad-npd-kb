'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function DocPage({ doc, navItems, currentSlug }) {
  const [query, setQuery] = useState('')

  const highlighted = useMemo(() => {
    if (!query.trim()) return doc.content
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return doc.content.replace(new RegExp(`(${escaped})`, 'gi'), '===$1===')
  }, [doc.content, query])

  const renderedContent = useMemo(() => {
    if (!query.trim()) return highlighted
    return highlighted.replace(/===(.+?)===/g, (_, m) => `**${m}**`)
  }, [highlighted, query])

  const matchCount = useMemo(() => {
    if (!query.trim()) return 0
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return (doc.content.match(new RegExp(escaped, 'gi')) || []).length
  }, [doc.content, query])

  return (
    <>
      <header className="header">
        <Link href="/docs/index" className="header-logo">⚡ e-motorad NPD KB</Link>
        <input
          className="header-search"
          type="search"
          placeholder="Search this page..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <span style={{ fontSize: '0.8rem', color: '#6b7280', whiteSpace: 'nowrap' }}>
            {matchCount} match{matchCount !== 1 ? 'es' : ''}
          </span>
        )}
      </header>

      <div className="layout">
        <nav className="sidebar">
          <ul className="sidebar-nav">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/docs/${item.slug}`}
                  className={currentSlug === item.slug ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="main">
          <article className="prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {renderedContent}
            </ReactMarkdown>
          </article>
        </main>
      </div>
    </>
  )
}
