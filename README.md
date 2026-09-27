# ICD-10 Lookup

A disease-to-ICD-10 code converter. Search a condition by name and get its
ICD-10-CM code, a plain-language description, a one-click copy button, and
a running history of recent searches — all in a clean, reference-style
medical UI.

Built with React (Vite) and Tailwind CSS.

## Project structure

```
icd10-converter/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── icd10Data.js       # the disease → ICD-10 dataset
    └── components/
        ├── SearchBar.jsx
        ├── DiseaseEntry.jsx
        ├── HistoryPanel.jsx
        └── CopyButton.jsx
```

## Run it locally

You'll need [Node.js](https://nodejs.org) 18 or later.

```bash
npm install
npm run dev
```

This starts a dev server (usually at `http://localhost:5173`) with hot
reload.

To build a production bundle locally:

```bash
npm run build
npm run preview
```

## Deploying on Vercel

**Option A — Vercel dashboard (no CLI needed)**

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that
   repository.
3. Vercel auto-detects the Vite framework preset. Confirm these settings
   (they should already be filled in):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Click **Deploy**. Vercel builds the project and gives you a live URL
   (e.g. `your-project.vercel.app`) within a minute or two.
5. Every subsequent push to your main branch redeploys automatically;
   pushes to other branches get their own preview URLs.

**Option B — Vercel CLI**

```bash
npm install -g vercel
cd icd10-converter
vercel        # follow the prompts; deploys a preview
vercel --prod # promotes to your production URL
```

No environment variables or extra configuration are required — this is a
fully static, self-contained frontend app.

## Extending the dataset

All disease-to-code entries live in `src/data/icd10Data.js`. Each entry
follows this shape:

```js
{
  name: "Essential (primary) hypertension",
  aliases: ["high blood pressure", "hypertension", "htn"],
  code: "I10",
  description: "Chronic elevated blood pressure with no identifiable secondary cause.",
  category: "Cardiovascular",
}
```

Add, edit, or remove entries here to grow the reference set — no other
code changes are needed, since the search and rendering logic reads
directly from this array.

## Note on accuracy

The included codes are a curated reference set for common conditions and
are meant for convenience, not clinical or billing use. Always confirm
against the current CMS ICD-10-CM manual for official coding.
