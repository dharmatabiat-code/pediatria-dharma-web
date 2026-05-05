# Fix Vercel 403 Forbidden Error - Progress Tracker

## Current Status: 🔄 In Progress

### Plan Steps:
- [x] **Step 1**: Update `astro.config.mjs` - Add dynamic `site` using `import.meta.env.VERCEL_URL` ✅
- [ ] **Step 2**: Update `src/data/company.js` - Make `siteUrl` dynamic with Vercel env fallback
- [ ] **Step 3**: Minor fix `src/layouts/Layout.astro` - Ensure canonical uses dynamic URL
- [ ] **Step 4**: Create `vercel.json` - Add rewrites/headers for SSR safety
- [ ] **Step 5**: Test local preview & instruct Vercel redeploy
- [x] Plan approved ✅

**Root Cause**: Hardcoded production domain (`https://pediatria.dharmatabiat.com`) in SSR config conflicts with Vercel preview domain (*.vercel.app) → 403 Forbidden.

**Next**: Execute Step 2 - Update company.js siteUrl.
