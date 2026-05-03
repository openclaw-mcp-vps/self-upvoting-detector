import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Self-Upvoting Detector — Detect Voting Manipulation',
  description: 'API that analyzes voting patterns to detect self-upvoting, bot networks, and manipulation across Reddit, HN, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="114d8de4-cdee-4b00-a10b-197c07899293"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
