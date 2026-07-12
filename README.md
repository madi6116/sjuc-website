# SJUC Website

React + Vite version of the San Jose University of California site.

## Setup

```
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```
npm run preview
```

## Structure

```
src/
  App.jsx              root component, renders every section in order
  index.css            all design tokens + styles (global stylesheet)
  hooks/useReveal.js    scroll-in-view hook used by Reveal.jsx
  components/
    Nav.jsx             sticky header + scroll state
    MobileMenu.jsx       fullscreen mobile nav
    Hero.jsx             hero + animated meridian SVG
    Snapshot.jsx         dark trust bar (3 stats)
    Programs.jsx         program cards section
    SpotlightCard.jsx    reusable hover-glow card
    Approach.jsx         3-column "approach" section
    Admissions.jsx       timeline + status notice
    Visit.jsx            address / phone / email / map
    ContactForm.jsx      the request-info form (client-side only for now)
    Footer.jsx
    Reveal.jsx           wraps children, fades/slides in on scroll
```

## Notes

- The contact form (`ContactForm.jsx`) doesn't send anywhere yet — it just
  shows a success state. Wire the `handleSubmit` function up to a form
  service (Formspree, Getform, a serverless function, etc.) or your own API
  before launch.
- Swap the "印" placeholder mark in `Nav.jsx` and `Footer.jsx` for a real
  logo whenever one is ready.
- Fonts (Source Serif 4, Work Sans, IBM Plex Mono) load from Google Fonts in
  `index.html`.
