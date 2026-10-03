import { Mail, type LucideIcon } from 'lucide-react'
import type { SVGProps } from 'react'

function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.32 1.08 2.89.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.11-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Discord(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.27 5.33A16.5 16.5 0 0 0 15.23 4l-.28.56a12 12 0 0 1 3.6 1.5 11.6 11.6 0 0 0-9.1 0 12 12 0 0 1 3.6-1.5L12.77 4a16.5 16.5 0 0 0-4.04 1.33C5.9 9.4 5.2 13.4 5.5 17.4a16.6 16.6 0 0 0 5.05 2.55l.62-1.05a10.9 10.9 0 0 1-1.8-.87l.4-.3a11.9 11.9 0 0 0 8.46 0l.4.3c-.57.34-1.17.63-1.8.87l.62 1.05a16.6 16.6 0 0 0 5.05-2.55c.36-4.63-.6-8.6-3.23-12.07ZM9.68 14.9c-.97 0-1.77-.9-1.77-2s.78-2 1.77-2 1.79.9 1.77 2c0 1.1-.79 2-1.77 2Zm6.53 0c-.97 0-1.77-.9-1.77-2s.78-2 1.77-2 1.79.9 1.77 2c0 1.1-.79 2-1.77 2Z" />
    </svg>
  )
}

export const socialIcons: Record<string, LucideIcon | ((props: SVGProps<SVGSVGElement>) => React.ReactElement)> = {
  instagram: Instagram,
  discord: Discord,
  github: Github,
  mail: Mail,
}
