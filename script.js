// Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Page Navigation
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Show selected page
            document.getElementById(pageId).classList.add('active');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Reinitialize AOS for new content
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        }

        // Live Counter Animation
        function animateCounter() {
            const counter = document.getElementById('migration-counter');
            const target = 1247892;
            let current = 1200000;
            
            const increment = () => {
                if (current < target) {
                    current += Math.floor(Math.random() * 100) + 50;
                    counter.textContent = current.toLocaleString();
                    counter.classList.add('animate-counter');
                    setTimeout(() => {
                        counter.classList.remove('animate-counter');
                    }, 1000);
                }
            };

            // Update every 3 seconds
            setInterval(increment, 3000);
        }

        // Form Submission Handler
        document.getElementById('support-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const supportType = formData.get('support-type');
            const location = formData.get('location');
            const skills = formData.get('skills');
            const contact = formData.get('contact');

            if (!supportType || !location || !contact) {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate form submission
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Submitting...';
            button.disabled = true;

            setTimeout(() => {
                alert('Thank you for joining our support network! We will contact you soon with volunteer opportunities.');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });

        // Navbar scroll effect
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop;
        });

        // Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        // Smooth scrolling for internal links
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

        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', function() {
            animateCounter();
            
            // Add loading states
            const cards = document.querySelectorAll('.stat-card, .case-study, .solution-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });

            // Simulate data loading
            setTimeout(() => {
                document.body.classList.remove('loading');
            }, 1000);
        });

        // Easter egg: Konami code
        let konamiCode = [];
        const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        
        document.addEventListener('keydown', function(e) {
            konamiCode.push(e.keyCode);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.toString() === konamiSequence.toString()) {
                alert('🌍 Climate action activated! You found the secret. Every action counts in fighting climate change! 🌱');
                konamiCode = [];
            }
        });

        // Progressive Web App features
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                // Register service worker for offline functionality
                console.log('PWA features available');
            });
        }

        // Dark mode toggle (bonus feature)
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        }

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }

        // Performance monitoring
        window.addEventListener('load', function() {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);
            
            if (loadTime > 3000) {
                console.warn('Page load time is slower than optimal. Consider optimizing images and scripts.');
            }
        });

        // Analytics simulation (replace with real analytics in production)
        function trackEvent(category, action, label) {
            console.log(`Analytics: ${category} - ${action} - ${label}`);
            // gtag('event', action, {
            //     event_category: category,
            //     event_label: label
            // });
        }

        // Track page views
        function trackPageView(page) {
            trackEvent('Navigation', 'page_view', page);
        }

        // Track form submissions
        document.addEventListener('submit', function(e) {
            trackEvent('Form', 'submit', e.target.id);
        });

        // Track link clicks
        document.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                trackEvent('Link', 'click', e.target.href);
            }
        });

        // Load Leaflet JS
const leafletScript = document.createElement('script');
leafletScript.src = "https://unpkg.com/leaflet/dist/leaflet.js";
leafletScript.onload = initMigrationMap;
document.head.appendChild(leafletScript);

function initMigrationMap() {
    // Create map
    const map = L.map('migration-map').setView([20, 0], 2);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 6,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Example migration flows (from lat/lng to lat/lng)
    const flows = [
        { from: [23.685, 90.3563], to: [28.6139, 77.2090], label: 'Bangladesh → India' },
        { from: [34.8021, 38.9968], to: [41.9028, 12.4964], label: 'Syria → Italy' },
        { from: [-1.2921, 36.8219], to: [30.0444, 31.2357], label: 'Kenya → Egypt' },
        { from: [-34.6037, -58.3816], to: [40.7128, -74.0060], label: 'Argentina → USA' }
    ];

    flows.forEach(flow => {
        const line = L.polyline([flow.from, flow.to], {
            color: '#d69e2e',
            weight: 3,
            opacity: 0.7,
            dashArray: '5,10'
        }).addTo(map);

        line.bindPopup(`<strong>${flow.label}</strong>`);

        // Pulse effect simulation
        setInterval(() => {
            line.setStyle({ opacity: 1, color: '#e53e3e' });
            setTimeout(() => {
                line.setStyle({ opacity: 0.7, color: '#d69e2e' });
            }, 1000);
        }, Math.random() * 5000 + 3000);
    });
}