// Cursor Tracking  
document.addEventListener('mousemove', (event) => {  
    const cursor = document.getElementById('cursor');  
    cursor.style.left = `${event.pageX}px`;  
    cursor.style.top = `${event.pageY}px`;  
});  

// Dark Mode Toggle  
document.addEventListener('DOMContentLoaded', () => {  
    const toggle = document.getElementById('dark-mode-toggle');  
    const currentTheme = localStorage.getItem('theme') || 'light';  
    document.body.classList.toggle('dark', currentTheme === 'dark');  
   	
    toggle.addEventListener('click', () => {  
        document.body.classList.toggle('dark');  
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');  
    });  
});  

// Back-to-Top Button  
const backToTopButton = document.getElementById('back-to-top');  
window.addEventListener('scroll', () => {  
    if (window.scrollY > 300) {  
        backToTopButton.style.display = 'block';  
    } else {  
        backToTopButton.style.display = 'none';  
    }  
});  

backToTopButton.addEventListener('click', () => {  
    window.scrollTo({  
        top: 0,  
        behavior: 'smooth'  
    });  
});  

// Navigation Highlighting  
document.querySelectorAll('nav a').forEach(link => {  
    link.addEventListener('click', () => {  
        document.querySelector('nav .active')?.classList.remove('active');  
        link.classList.add('active');  
    });  
});  

// Form Validation with Email Regex  
const form = document.querySelector('form');  
form.addEventListener('submit', (event) => {  
    const emailField = form.querySelector('input[type="email"]');  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailRegex.test(emailField.value)) {  
        event.preventDefault();  
        const errorMsg = document.createElement('div');  
        errorMsg.textContent = 'Please enter a valid email address.';  
        emailField.parentElement.appendChild(errorMsg);  
    }  
});  

// Improved Form Error Handling with Inline Messages  
// (Handled inline in the validation above)  

// Keyboard Accessibility for Buttons  
document.querySelectorAll('button').forEach(button => {  
    button.setAttribute('tabindex', '0');  
    button.addEventListener('keydown', (event) => {  
        if (event.key === 'Enter' || event.key === ' ') {  
            button.click();  
        }  
    });  
});  
