// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Typing Animation - Sequential
const nameElement = document.querySelector('.typing-name');
const typingElement = document.querySelector('.typing-text');
const descriptionElement = document.querySelector('.typing-description');

const fullName = "Ernazarov Og'abek";

const typingTexts = [
    'Frontend Developer',
    'React Developer',
    'UI/UX Enthusiast',
    
];

const descriptions = [
    'Zamonaviy va foydalanuvchilarga qulay veb-ilovalar yarataman',
    'React va TypeScript bilan ilovalar yasayman',
    'Figma dizaynlarini hayotga tatbiq etaman',
    'Responsive va interaktiv veb-saytlar quraman'
];

let nameIndex = 0;
let textIndex = 0;
let charIndex = 0;
let currentStep = 'name'; // name -> title -> description

// Step 1: Type Name
function typeName() {
    if (nameIndex < fullName.length) {
        nameElement.textContent = fullName.substring(0, nameIndex + 1);
        nameIndex++;
        setTimeout(typeName, 100);
    } else {
        setTimeout(() => {
            currentStep = 'title';
            typeTitle();
        }, 500);
    }
}

// Step 2: Type Title
function typeTitle() {
    const currentText = typingTexts[textIndex];
    
    if (charIndex < currentText.length) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeTitle, 100);
    } else {
        setTimeout(() => {
            currentStep = 'description';
            charIndex = 0;
            typeDescription();
        }, 500);
    }
}

// Step 3: Type Description
function typeDescription() {
    const currentDesc = descriptions[textIndex];
    
    if (charIndex < currentDesc.length) {
        descriptionElement.textContent = currentDesc.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeDescription, 50);
    } else {
        setTimeout(() => {
            deleteAll();
        }, 2000);
    }
}

// Delete all in reverse order
function deleteAll() {
    const currentDesc = descriptions[textIndex];
    
    if (descriptionElement.textContent.length > 0) {
        descriptionElement.textContent = currentDesc.substring(0, descriptionElement.textContent.length - 1);
        setTimeout(deleteAll, 30);
    } else if (typingElement.textContent.length > 0) {
        typingElement.textContent = typingTexts[textIndex].substring(0, typingElement.textContent.length - 1);
        setTimeout(deleteAll, 30);
    } else if (nameElement.textContent.length > 0) {
        nameElement.textContent = fullName.substring(0, nameElement.textContent.length - 1);
        setTimeout(deleteAll, 30);
    } else {
        // Reset and start again
        nameIndex = 0;
        charIndex = 0;
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(typeName, 500);
    }
}

// Start animation
setTimeout(typeName, 500);

// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    }
});
