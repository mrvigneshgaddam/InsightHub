// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeBtns = document.querySelectorAll('.close-btn');
const materialsGrid = document.getElementById('materialsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Sample Data
const materials = [
    {
        id: 1,
        title: 'Complete Physics Notes',
        author: 'Dr. Sarah Johnson',
        price: '$29.99',
        type: 'notes',
        image: '/images/physics.jpg'
    },
    {
        id: 2,
        title: 'Advanced Calculus Presentation',
        author: 'Prof. Michael Chen',
        price: '$24.99',
        type: 'presentations',
        image: '/images/calculus.jpg'
    },
    // Add more materials as needed
];

const testimonials = [
    {
        content: "This platform has transformed how I share my teaching materials. I'm now able to reach students worldwide.",
        author: "Prof. James Wilson",
        role: "Mathematics Teacher"
    },
    // Add more testimonials as needed
];

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Modal Functions
function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modal Event Listeners
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(loginModal);
});

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(signupModal);
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        closeModal(btn.closest('.modal'));
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Materials Filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterType = btn.dataset.filter;
        displayMaterials(filterType);
    });
});

// Display Materials
function displayMaterials(filter = 'all') {
    const filteredMaterials = filter === 'all' 
        ? materials 
        : materials.filter(material => material.type === filter);

    materialsGrid.innerHTML = filteredMaterials.map(material => `
        <div class="material-card fade-in">
            <img src="${material.image}" alt="${material.title}" class="material-image">
            <div class="material-content">
                <h3 class="material-title">${material.title}</h3>
                <p class="material-author">By ${material.author}</p>
                <p class="material-price">${material.price}</p>
                <button class="btn btn-primary btn-sm">Subscribe</button>
            </div>
        </div>
    `).join('');
}

// Form Handling
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login submitted');
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup submitted');
});

// Initialize Page
function initializePage() {
    displayMaterials();
    // Add any other initialization logic
}

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Handle File Uploads (for teachers)
function handleFileUpload(files) {
    // Add file upload logic here
    console.log('Files to upload:', files);
}

// Subscription Handling
function handleSubscription(materialId) {
    // Add subscription logic here
    console.log('Subscribe to material:', materialId);
}

// Search Functionality
function searchMaterials(query) {
    const searchResults = materials.filter(material => 
        material.title.toLowerCase().includes(query.toLowerCase()) ||
        material.author.toLowerCase().includes(query.toLowerCase())
    );
    displayMaterials('all', searchResults);
}

// Add scroll animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.feature-card, .material-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // Add animation class when element is in viewport
        if (position.top < window.innerHeight - 100) {
            element.classList.add('fade-in');
        }
    });
});