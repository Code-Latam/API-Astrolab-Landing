# API Astrolab Landing Page

This is a localized landing page built with [Astro](https://astro.build/) that supports Spanish (`es`) and English (`en`) locales. The English pages can be generated automatically from their Spanish counterparts.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Use the `.env.example` file as a template to create a `.env` file in the root of the project. Fill in the required environment variables:

```bash
PUBLIC_ENV=
REACT_APP_URL_DEV=
REACT_APP_URL_PROD=
BACKEND_URL_DEV=
BACKEND_URL_PROD=
```

> ⚠️ Notes:
>
> - Required for deployment: `PUBLIC_ENV`, `REACT_APP_URL_PROD`, and `BACKEND_URL_PROD`.
> - `PUBLIC_ENV` should be set to either `development` or `production` to load the appropriate environment settings.

## 📦 Available Commands

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the development server                  |
| `npm run build`   | Build the site for production                 |
| `npm run preview` | Preview the production build locally          |
| `npm run astro`   | Run Astro CLI commands                        |
| `npm run i18n`    | Generate localized English pages from Spanish |

To test your changes during development, run:

```bash
npm run dev
```

This starts the development server and hot-reloads changes automatically; except for updates to environment variables, which require a restart.

To simulate a production-like environment (e.g. for performance testing), run:

```bash
npm run build
npm run preview
```

This builds the app and serves the optimized output locally.

> ⚠️ Always run the `npm run i18n` script after making changes to Spanish pages or routes, and before pushing your changes. This ensures that all localized versions for supported languages are updated and accessible when running the app.

## 🌐 Localization Strategy

Localized routes are defined in `src/i18n/ui.js` via the routes object, which maps Spanish page names to their English equivalents:

```js
export const routes = {
  en: {
    index: "index",
    contactanos: "contact-us",
    "terminos-de-uso": "terms-of-use",
    "politica-de-privacidad": "privacy-policy",
    404: "404",
  },
  es: {
    index: "index",
    contactanos: "contactanos",
    "terminos-de-uso": "terminos-de-uso",
    "politica-de-privacidad": "politica-de-privacidad",
    404: "404",
  },
};
```

When you add a new page under `src/pages/`, register it in both language objects using the file name (without the `.astro` extension) as the key. For example, for a new file `src/pages/acerca-de-nosotros.astr`o:

```js
export const routes = {
  en: {
    "acerca-de-nosotros": "about-us",
  },
  es: {
    "acerca-de-nosotros": "acerca-de-nosotros",
  },
};
```

Once you’ve added or updated a Spanish page, you can automatically generate the corresponding localized versions by running:

```bash
npm run i18n
```

This executes the `generate-translations.js` script, which clones the Spanish pages and adapts their structure for each registered language. For example

```
src/pages/contactanos.astro → src/pages/contact-us.astro
```

> ⚠️ Page file names become part of the final URL. Stick to valid URL characters to avoid issues.

## Internationalizing Page Content

Use the API exposed through `src/i18n` and `src/i18n/utils` to internationalize your pages.

### 📑 Accessing a Translated Value

Given the following entry in your language dictionaries:

```json
{
  "my_example_section": {
    "my_example_title": "Hello World"
  }
}
```

You can retrieve and render that value like this:

```astro
---
import { getDictionary, getLangFromUrl } from "@/i18n/utils";

const currentLanguage = getLangFromUrl(Astro.url);
const d = getDictionary(currentLanguage);
---

<h1>{d.my_example_section.my_example_title}</h1>
```

> ⚠️ Notes:
>
> - Dictionaries are parsed as JavaScript objects, so you can leverage autocompletion to avoid typos.
> - The key you access (`d.my_example_section.my_example_title` in the example) must exist in all your language dictionaries. If a key is missing in any dictionary, TypeScript will raise a warning.

### 🔗 Translating Section Links

If you need to link to sections within a page using localized hash fragments, define those in the sections object inside `src/i18n/ui.js`:

```js
export const sections = {
  en: {
    forBusinesses: "for-businesses",
    subscription: "subscription",
  },
  es: {
    forBusinesses: "para-empresas",
    subscription: "suscripcion",
  },
};
```

🛠️ Adding a New Section

For example, to add a section with the hash `#my-section`, include its translation like this:

```js
export const sections = {
  en: {
    mySection: "my-section",
  },
  es: {
    mySection: "mi-seccion",
  },
};
```

🔗 Referencing the Section in a Link

You can then generate a localized anchor link like so:

```astro
---
import { getDictionary, getLangFromUrl } from "@/i18n/utils";
import { sections } from "@/i18n";

const currentLanguage = getLangFromUrl(Astro.url);
const translatedSections = sections[currentLanguage];

const d = getDictionary(currentLanguage); // This was kept for completness
---

<a href={`#${translatedSections.mySection}`}>{d.my_example_section.my_example_link}</a>
```

📚 Other Helpful Exports

- `languages`: an array of objects representing each language with its 2-letter code as the key.
- `defaultLang`: the default language 2-letter code as a string.
- `locales`: ccountry-specific locale codes (e.g. es-CO, en-US) used for formatting dates and times with JavaScript.

## 📁 Absolute Paths

This project uses absolute import paths with the `@` alias pointing to the `src` directory. This is the recommended approach, especially when generating translations of files in nested folders, as it helps prevent import errors.

For example, to import the Select component from `src/components/UI/Select.astro`, use:

```jsx
import Select from "@/components/UI/Select";
```
