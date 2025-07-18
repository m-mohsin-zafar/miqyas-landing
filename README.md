This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

The project follows a well-organized structure for better maintainability:

```
├── app/                  # Next.js App Router pages and routing
│   ├── [locale]/         # Locale-specific routes
│   ├── api/              # API routes
│   ├── data/             # Static data files (JSON)
│   ├── i18n/             # Internationalization configuration
│   └── types/            # TypeScript type definitions
├── components/           # React components
│   ├── common/           # Common/shared components
│   │   └── index.ts      # Re-exports for easier imports
│   ├── layout/           # Layout components
│   ├── sections/         # Page section components
│   │   └── faq/          # FAQ section components
│   ├── seo/              # SEO-related components
│   │   └── index.ts      # Re-exports for easier imports
│   └── ui/               # UI primitive components
│       └── index.ts      # Re-exports for easier imports
├── lib/                  # Library code and utilities
│   └── utils/            # Utility functions
│       ├── content/      # Content loading utilities
│       ├── i18n/         # Internationalization utilities
│       ├── icons/        # Icon utilities
│       ├── metadata/     # Metadata utilities
│       ├── schema/       # Schema.org utilities
│       └── index.ts      # Re-exports for easier imports
└── public/               # Static assets
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
