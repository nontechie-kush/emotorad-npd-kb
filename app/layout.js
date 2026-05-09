import './globals.css'

export const metadata = {
  title: 'e-motorad NPD Knowledge Base',
  description: 'New Product Development intelligence for e-motorad — India, Europe, USA markets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
