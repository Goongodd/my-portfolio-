# Emeka James | Scientist & Scribe

Personal portfolio website for **Emordi Emeka James** — Basic Science educator and screenwriter operating at the intersection of logic and imagination.

🌐 **Live Sites**
- Vercel: `your-vercel-url.vercel.app`
- GitHub Pages: `yourusername.github.io/your-repo-name`
- Netlify: `tristanjames.netlify.app`

---

## About

This is a single-page portfolio built with plain HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. Just three files and a live site.

It covers:
- A personal bio and philosophy (The Thesis)
- Teaching experience, skills, and certifications (The Journey)
- Creative writing and film work (Scripts & Stories)
- A working contact form (Send a Pulse)

---

## File Structure

```
/
├── index.html      # Main HTML file — structure and content
├── style.css       # All styles — layout, dark mode, animations
├── main.js         # All scripts — cursor, form, scroll, obfuscation
└── README.md       # This file
```

---

## Features

- **Dark mode** toggle with smooth transition
- **Custom cursor** on desktop
- **Scroll-triggered fade-in** animations via IntersectionObserver
- **Sticky navigation** with active section highlighting
- **Contact form** powered by [Formspree](https://formspree.io)
- **Spam protection** via honeypot field
- **Obfuscated contact info** — WhatsApp number and email assembled at runtime to prevent scraper harvesting
- **Security headers** via Content Security Policy meta tag
- **Safe external links** — all `target="_blank"` links use `rel="noopener noreferrer"`
- **Responsive design** — works on mobile, tablet, and desktop
- **Back to top** button

---

## Setup

No installation needed. Just open `index.html` in a browser.

To deploy, push to GitHub and connect to Vercel, Netlify, or GitHub Pages — all three will serve the site automatically on every push.

---

## Contact Form

The form uses [Formspree](https://formspree.io). The form ID is set in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" ...>
```

To change it, sign in to Formspree, create a new form, and replace `YOUR_FORM_ID` with the ID provided.

---

## Replacing the Profile Photo

The current avatar displays initials (EJ) as a styled placeholder. To add a real photo:

1. Add your image file to the project folder (e.g. `photo.jpg`)
2. In `index.html`, find:
   ```html
   <div class="profile-photo-inner">EJ</div>
   ```
3. Replace with:
   ```html
   <div class="profile-photo-inner">
       <img src="photo.jpg" alt="Emeka James" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">
   </div>
   ```

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

Change these to restyle the entire site instantly.

---

## License

© Emordi Emeka James. All rights reserved.
