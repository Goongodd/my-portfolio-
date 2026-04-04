# Emeka James | Scientist & Scribe

Personal portfolio website for **Emordi Emeka James** — Basic Science educator and screenwriter operating at the intersection of logic and imagination.

🌐 **Live Site**
- GitHub Pages: https://goongodd.github.io/my-portfolio-/

---

## About

This is a single-page portfolio built with plain HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. Just three files and a live site.

It covers:
- A personal bio and philosophy (The Thesis)
- Teaching experience, skills, and certifications (The Journey)
- Creative writing and film work (Scripts & Stories)
- A working contact form (Send a Pulse)

---

## Features

- **Dark mode** toggle with smooth transition
- **Custom cursor** on desktop (tracked mouse movement)
- **Scroll-triggered fade-in** animations via IntersectionObserver
- **Sticky navigation** with active section highlighting
- **Contact form** powered by Formspree
- **Spam protection** via honeypot field
- **Obfuscated contact info** — WhatsApp number and email assembled at runtime to prevent scraper harvesting
- **Security headers** via Content Security Policy meta tag
- **Safe external links** — all `target="_blank"` links use `rel="noopener noreferrer"`
- **Responsive design** — works on mobile, tablet, and desktop
- **Back to top** button with smooth scroll
- **CV download** link
- **Google Analytics** integration
- **CSS Variables** for easy customization

---

## File Structure

```
/
├── index.html      # Main HTML file — structure and content
├── style.css       # All styles — layout, dark mode, animations, responsive
├── main.js         # All scripts — cursor, form, scroll, obfuscation
├── README.md       # This file
└── emeka_james_cv.pdf  # CV document (downloadable)
```

---

## Setup

No installation needed. Just open `index.html` in a browser.

To deploy, push to GitHub and connect to Vercel, Netlify, or GitHub Pages — all three will serve the site automatically on every push.

---

## Portfolio Contents

### Films (5 Produced + 1 In Development)
- **One Night, Maybe.** — A cinematic study on vulnerability and rare safety
- **Fractured Vows** — When tragedy strikes and an old flame reappears
- **Words Unsaid** — Two former lovers in a confrontation long overdue
- **In-Between** — Caught between loyalty and temptation
- **The Maid** — When the help outshines the madam
- **The Anatomy of Abigael** (In Development) — A young woman with answers for everyone except herself

### Writing
- **Stories (7):** Partyers Are Endangered Species, Papa Joseph, Mr. Purple, Waist Beads Can't Say Please, In Earthquakes and Hopelessness, Nori's Comeuppance Reincarnated as Post Pills, The Anatomy of My Anecdote
- **Poetry (2):** Lampposts Are the Most Broken, Goodbyes Aren't Beautiful in Taxis

All writing published on Medium and linked within the portfolio.

---

## Contact Form

The form uses [Formspree](https://formspree.io). The form ID is set in `index.html`:

```html
<form action="https://formspree.io/f/xjgadelq" ...>
```

To change it, sign in to Formspree, create a new form, and replace the form ID with the one provided.

---

## Customisation

All colours and fonts are defined as CSS variables at the top of `style.css`:

```css
:root {
    --primary: #3b82f6;   /* Blue — main accent */
    --accent:  #f59e0b;   /* Amber — secondary accent */
    --bg:      #ffffff;   /* Page background */
    --text:    #1a1a1a;   /* Body text */
}
```

Change these to restyle the entire site instantly. Dark mode variables are defined separately:

```css
body.dark {
    --bg:      #0f172a;
    --text:    #f1f5f9;
    --primary: #60a5fa;
    --accent:  #fbbf24;
}
```

---

## Testimonials

The portfolio includes verified testimonials from:
- Mrs. Stella — Fellow Science Educator
- Mrs. Adaeze Okonkwo — Parent
- Jewel Model Primary School Staff

---

## Credentials

- NYSC Certificate
- B.Sc. (Ed) Integrated Science
- TRCN Licensed Teacher

**Teaching Experience:**
- 3+ years in classroom
- 50+ students taught
- 4 produced films

---

## License

© Emordi Emeka James. All rights reserved.