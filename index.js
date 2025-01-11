// Subject data
const subjects = [
    'Accounting', 'Algebra', 'Art & Design', 'Article Writing', 'Biology',
    'Business & Finance', 'Calculus', 'Chemistry', 'Communications',
    'Computer Science', 'Economics', 'Engineering', 'Environmental Science',
    'Excel', 'Film', 'Foreign Languages', 'Geology', 'Health & Medical',
    'History', 'Law', 'Management', 'Marketing', 'Mathematics', 'Philosophy',
    'Physics', 'Political Science', 'Programming', 'Psychology', 'Python',
    'SAT', 'Social Science', 'Sociology', 'Statistics', 'Website Design', 'Java'
];

// Populate subjects in footer
function populateSubjects() {
    const subjectsList = document.querySelector('.subjects-list');
    subjects.forEach(subject => {
        const link = document.createElement('a');
        link.href = `#${subject.toLowerCase().replace(' ', '-')}`;
        link.textContent = subject;
        link.style.color = '#fff';
        link.style.textDecoration = 'none';
        subjectsList.appendChild(link);
    });
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.subject-card');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    currentSlide = n;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % Math.ceil(slides.length / 4);
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + Math.ceil(slides.length / 4)) % Math.ceil(slides.length / 4);
    showSlide(currentSlide);
}

// Event Listeners
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    // Add your search logic here
    console.log('Searching for:', searchTerm);
}

document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('input', handleSearch);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateSubjects();
    showSlide(0);
    
    // Auto-advance carousel
    setInterval(nextSlide, 5000);
});

// Mobile menu toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.classList.add('mobile-menu-btn');
mobileMenuBtn.innerHTML = '☰';
document.querySelector('nav').appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});