/* ================================================
   Emeka James | Scientist & Scribe — Scripts
   ================================================ */

// ---------- Custom Cursor ----------
const cursor = document.getElementById('cursor');
if (window.matchMedia("(min-width: 1024px)").matches) {
    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
    });
}

// ---------- Scroll: Back to Top & Active Nav ----------
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) btt.classList.add('visible');
    else btt.classList.remove('visible');

    let current = "";
    document.querySelectorAll("section").forEach(s => {
        if (pageYOffset >= s.offsetTop - 150) current = s.getAttribute("id");
    });
    document.querySelectorAll("nav a").forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) a.classList.add("active");
    });
});

// ---------- Dark Mode Toggle ----------
function toggleDarkMode() { document.body.classList.toggle("dark"); }

// ---------- Scroll to Top ----------
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ---------- Footer Year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Obfuscated WhatsApp Link ----------
// Assembled at runtime to prevent scraper harvesting
(function() {
    const parts = ['https://wa', '.me/', '2348142', '624400'];
    const el = document.getElementById('waLink');
    if (el) {
        el.href = parts.join('');
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
    }
})();

// ---------- Obfuscated Email Link ----------
// Assembled at runtime to prevent scraper harvesting
(function() {
    const parts = ['emordi', 'emeka42', '@', 'gmail', '.com'];
    const el = document.getElementById('emailLink');
    if (el) {
        el.href = 'mailto:' + parts.join('');
    }
})();

// ---------- Scroll Fade-in Observer ----------
const obs = new IntersectionObserver(ents => {
    ents.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade').forEach(el => obs.observe(el));

// ---------- Contact Form (Formspree) ----------
async function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    const form = document.getElementById('contactForm');
    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
        } else {
            btn.disabled = false;
            btn.textContent = 'Send the Pulse →';
            alert('Something went wrong. Please try again or reach out via WhatsApp.');
        }
    } catch (err) {
        btn.disabled = false;
        btn.textContent = 'Send the Pulse →';
        alert('Network error. Please try again.');
    }
}
