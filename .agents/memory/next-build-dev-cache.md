---
name: Next.js build and dev cache
description: Avoid false runtime failures caused by production builds mutating the cache used by the active development server.
---

Do not run `next build` while the Next.js development workflow is actively serving from the same workspace. Run the build, then restart the development workflow before preview validation.

**Why:** The production build can replace files in `.next` while the dev server still references its previous chunk graph, producing misleading missing-module or minified runtime errors even though the code builds correctly.

**How to apply:** For final validation, complete the production build first, then restart the configured Next.js workflow and inspect the fresh preview and logs.