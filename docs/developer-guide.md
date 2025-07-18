# Developer Guide: MIQYAS Project Structure

This guide provides an overview of the MIQYAS project structure, explaining how to utilize and extend the codebase following our established patterns and best practices.

## Table of Contents

1. [Project Structure Overview](#project-structure-overview)
2. [Key Directories](#key-directories)
3. [Component Organization](#component-organization)
4. [Content Management](#content-management)
5. [Internationalization (i18n)](#internationalization-i18n)
6. [Utilities](#utilities)
7. [Adding New Features](#adding-new-features)
8. [Best Practices](#best-practices)

## Project Structure Overview

The MIQYAS project follows a modular structure organized around Next.js app router, with clear separation of concerns:

```
miqyas-landing/
├── app/                  # Next.js app router pages and routes
├── components/           # Reusable UI components
├── lib/                  # Shared utilities, data, and configuration
├── public/               # Static assets
└── docs/                 # Documentation
```

## Key Directories

### `/app`

Contains Next.js app router pages and layouts:

- `/app/page.tsx` - Root page
- `/app/[locale]/page.tsx` - Localized pages
- `/app/layout.tsx` - Root layout
- `/app/[locale]/layout.tsx` - Localized layouts
- `/app/examples/` - Example components and usage patterns

### `/components`

Reusable UI components organized by purpose:

- `/components/ui/` - Basic UI components (buttons, accordions, dialogs)
- `/components/common/` - Common components used across the app (theme switcher, language switcher)
- `/components/sections/` - Page sections (hero, features, FAQ, etc.)
- `/components/layout/` - Layout components
- `/components/seo/` - SEO-related components (schemas, metadata)

### `/lib`

Shared utilities, data, and configuration:

- `/lib/data/` - JSON data files
- `/lib/i18n/` - Internationalization utilities and dictionaries
- `/lib/types/` - TypeScript type definitions
- `/lib/utils/` - Utility functions organized by domain

## Component Organization

### Adding New UI Components

Place UI components in the appropriate directory based on their purpose:

1. **Basic UI Components**: Add to `/components/ui/`
   ```tsx
   // components/ui/my-button.tsx
   export function MyButton({ children, ...props }) {
     return <button {...props}>{children}</button>;
   }
   ```

2. **Common Components**: Add to `/components/common/`
   ```tsx
   // components/common/my-common-component.tsx
   export default function MyCommonComponent() {
     return <div>Common Component</div>;
   }
   ```

3. **Export from index.ts**:
   ```tsx
   // components/ui/index.ts
   export * from './my-button';
   ```

### Adding New Sections

For new page sections:

1. Create a directory in `/components/sections/[section-name]/`
2. Add the main component and any supporting files
3. Create an index.ts file to export the components

```tsx
// components/sections/my-section/my-section.tsx
export default function MySection() {
  return <section>My New Section</section>;
}

// components/sections/my-section/index.ts
export { default as MySection } from './my-section';
```

## Content Management

The project uses a hybrid approach for content management:

### Section Data Files

For structured content, use the section data files approach:

1. **Define Types**: Add interfaces to `/lib/types/content.ts`
   ```tsx
   // lib/types/content.ts
   export interface MyNewSectionContent {
     title: string;
     items: Array<{
       id: string;
       name: string;
     }>;
   }
   ```

2. **Create Data File**: Add a JSON file to `/lib/data/sections/`
   ```json
   // lib/data/sections/my-new-section.json
   {
     "title": "My Section Title",
     "items": [
       { "id": "1", "name": "Item 1" },
       { "id": "2", "name": "Item 2" }
     ]
   }
   ```

3. **Export from index.ts**:
   ```tsx
   // lib/data/sections/index.ts
   import myNewSectionData from './my-new-section.json';
   export { myNewSectionData };
   ```

4. **Add Loader Function**: Update `/lib/utils/content/content-loader.ts`
   ```tsx
   // lib/utils/content/content-loader.ts
   import { MyNewSectionContent } from '@/lib/types/content';
   import { myNewSectionData } from '@/lib/data/sections';

   export function getMyNewSectionContent(): MyNewSectionContent {
     return myNewSectionData as MyNewSectionContent;
   }
   ```

### i18n Dictionaries

For localized text content:

1. **Add to Dictionaries**: Update dictionary files in `/lib/i18n/dictionaries/`
   ```json
   // lib/i18n/dictionaries/en.json
   {
     "myNewSection": {
       "title": "My Section Title",
       "subtitle": "My section subtitle"
     }
   }

   // lib/i18n/dictionaries/ar.json
   {
     "myNewSection": {
       "title": "عنوان القسم الخاص بي",
       "subtitle": "العنوان الفرعي للقسم الخاص بي"
     }
   }
   ```

2. **Use in Components**:
   ```tsx
   // components/sections/my-section/my-section.tsx
   import { Dictionary } from '@/lib/i18n';

   interface MyNewSectionProps {
     dictionary: Dictionary;
   }

   export default function MyNewSection({ dictionary }: MyNewSectionProps) {
     return (
       <section>
         <h2>{dictionary.myNewSection.title}</h2>
         <p>{dictionary.myNewSection.subtitle}</p>
       </section>
     );
   }
   ```

## Internationalization (i18n)

The project supports multiple languages through the i18n system:

### Adding New Languages

1. **Create Dictionary File**: Add a new JSON file to `/lib/i18n/dictionaries/`
   ```json
   // lib/i18n/dictionaries/fr.json
   {
     "hero": {
       "title": "Titre en français"
     }
   }
   ```

2. **Update i18n Config**: Add the new locale to `/lib/i18n/config.ts`
   ```tsx
   // lib/i18n/config.ts
   export const i18n = {
     defaultLocale: 'en',
     locales: ['en', 'ar', 'fr'],
   } as const;
   ```

### Using i18n in Components

```tsx
// app/[locale]/page.tsx
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n/config';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  
  return (
    <main>
      <h1>{dict.hero.title}</h1>
    </main>
  );
}
```

## Utilities

### Adding New Utilities

1. **Determine the Category**: Place utilities in the appropriate subdirectory of `/lib/utils/`
2. **Create Utility File**: Add your utility function
3. **Export from index.ts**: Make it available for import

```tsx
// lib/utils/my-domain/my-utility.ts
export function myUtilityFunction(param: string): string {
  return `Processed: ${param}`;
}

// lib/utils/my-domain/index.ts
export * from './my-utility';
```

## Adding New Features

When adding new features to the application:

1. **Identify the Feature Type**: Determine if it's a UI component, section, utility, or data
2. **Place Files Appropriately**: Follow the established directory structure
3. **Update Types**: Add or update TypeScript interfaces as needed
4. **Update Content**: Add content to section data files or i18n dictionaries as appropriate
5. **Export Components**: Make sure to export components from index.ts files
6. **Update Documentation**: Document new features or changes

## Best Practices

### File Naming

- Use kebab-case for file names: `my-component.tsx`, `my-utility.ts`
- Use PascalCase for component names: `MyComponent`
- Use camelCase for function and variable names: `myFunction`

### Component Structure

- Keep components focused on a single responsibility
- Use TypeScript interfaces for props
- Export components as named exports when part of a collection
- Export components as default exports when they are the main export of a file

### Import Organization

- Use absolute imports with the `@/` prefix
- Group imports by type (React, Next.js, components, utilities)
- Use named imports when importing multiple items from a module

### Code Organization

- Keep files small and focused
- Use index.ts files to re-export components and utilities
- Follow the established directory structure
- Use TypeScript for type safety

By following these guidelines, you'll maintain consistency with the existing codebase and make it easier for other developers to understand and extend your work.
