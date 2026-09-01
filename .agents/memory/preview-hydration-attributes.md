---
name: Preview hydration attributes
description: Handling root-level hydration mismatches caused only by the persistent Replit preview session.
---

Allow hydration differences on the root `html` and `body` elements when clean browser sessions render correctly but the persistent preview reports a mismatch.

**Why:** The persistent preview can add or restore root document attributes before React hydrates. This produced repeated hydration runtime overlays even though fresh browser captures, route requests, and TypeScript checks were clean.

**How to apply:** Keep `suppressHydrationWarning` limited to the root elements. Do not add it to application components, where it could hide genuine server/client markup differences.