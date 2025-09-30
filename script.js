<<<<<<< HEAD
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
=======
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
    
    // Initialize charts if on data-insights page
    if (pageId === 'data-insights') {
        setTimeout(() => {
            initCO2Chart();
            initMigrationChart();
        }, 200);
    }
}

// Live Counter Animation
function animateCounter() {
    const counter = document.getElementById('migration-counter');
    if (!counter) return;
    
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

// CO2 Chart Initialization
function initCO2Chart() {
    const canvas = document.getElementById('co2Chart');
    if (!canvas) return;
    
    if (canvas.chart) {
        canvas.chart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    
    const years = [1960, 1970, 1980, 1990, 2000, 2005, 2010, 2015, 2020, 2024];
    const co2Levels = [317, 326, 339, 354, 370, 380, 390, 400, 414, 421];
    
    canvas.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Atmospheric CO₂ (ppm)',
                data: co2Levels,
                borderColor: '#e53e3e',
                backgroundColor: 'rgba(229, 62, 62, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#e53e3e'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // CRITICAL FIX
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#2d3748',
                        font: { size: 13, weight: 'bold' },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#e53e3e',
                    bodyColor: '#ffffff',
                    borderColor: '#e53e3e',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'CO₂: ' + context.parsed.y + ' ppm';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 300,
                    max: 430,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        drawBorder: true
                    },
                    ticks: {
                        color: '#2d3748',
                        font: { size: 11 },
                        padding: 8,
                        callback: function(value) {
                            return value + ' ppm';
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: true
                    },
                    ticks: {
                        color: '#2d3748',
                        font: { size: 11 },
                        padding: 8
                    }
                }
            }
        }
    });
}


// Migration Projections Chart
function initMigrationChart() {
    const canvas = document.getElementById('migrationChart');
    if (!canvas) return;
    
    if (canvas.chart) {
        canvas.chart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    
    canvas.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Sub-Saharan\nAfrica', 
                'South\nAsia', 
                'Latin\nAmerica', 
                'North\nAfrica', 
                'East\nAsia', 
                'Eastern\nEurope'
            ],
            datasets: [{
                label: 'Projected Climate Migrants by 2050 (millions)',
                data: [86, 63, 17, 19, 49, 5],
                backgroundColor: [
                    '#e53e3e',
                    '#f59e0b',
                    '#10b981',
                    '#3b82f6',
                    '#8b5cf6',
                    '#ec4899'
                ],
                borderWidth: 0,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // CRITICAL FIX
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 20 // Extra padding for labels
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#2d3748',
                        font: { size: 13, weight: 'bold' },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#f59e0b',
                    bodyColor: '#ffffff',
                    borderColor: '#f59e0b',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'Migrants: ' + context.parsed.y + ' million';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 90,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        drawBorder: true
                    },
                    ticks: {
                        color: '#2d3748',
                        font: { size: 11 },
                        padding: 8,
                        callback: function(value) {
                            return value + 'M';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: true
                    },
                    ticks: {
                        color: '#2d3748',
                        font: { size: 10 },
                        padding: 8,
                        maxRotation: 0, // Keep labels horizontal
                        minRotation: 0
                    }
                }
            }
        }
    });
}

// Temperature Scenario Simulator
const scenarios = {
    1: {
        temp: '+1.0°C',
        impacts: [
            'Coral reefs decline by 70-90%',
            'Arctic sea ice-free summers rare',
            'Extreme heat events double in frequency',
            'Small island nations face flooding'
        ]
    },
    1.5: {
        temp: '+1.5°C',
        impacts: [
            'Paris Agreement target - significant impacts still occur',
            'Arctic sea ice-free summers once per decade',
            'Crop yields decline in tropical regions',
            '280 million people exposed to coastal flooding'
        ]
    },
    2: {
        temp: '+2.0°C',
        impacts: [
            '99% of coral reefs destroyed',
            'Mass crop failures in tropics begin',
            'West Antarctic ice sheet potentially unstable',
            '130 million pushed into extreme poverty'
        ]
    },
    2.5: {
        temp: '+2.5°C',
        impacts: [
            'Deadly heat waves exceed human survivability limits',
            'Amazon rainforest shifts to savanna',
            'Major coastal cities require massive defenses',
            'Ocean circulation patterns destabilize'
        ]
    },
    3: {
        temp: '+3.0°C',
        impacts: [
            'Equatorial zones become uninhabitable seasonally',
            'Global food system faces collapse',
            'Hundreds of millions displaced by sea rise',
            'Permafrost methane release accelerates'
        ]
    },
    3.5: {
        temp: '+3.5°C',
        impacts: [
            'Large Earth regions uninhabitable in summer',
            'Water scarcity affects billions globally',
            'Tropical diseases spread to temperate zones',
            'Economic systems face systemic collapse'
        ]
    },
    4: {
        temp: '+4.0°C',
        impacts: [
            'Civilizational threat - Earth carrying capacity reduced',
            'Billions displaced in mass migration',
            'Ecosystem collapse and mass extinction',
            'Social systems fail - resource conflicts escalate'
        ]
    }
};

function updateScenario(temp) {
    const tempDisplay = document.getElementById('temp-display');
    const scenarioOutput = document.getElementById('scenario-output');
    
    if (!tempDisplay || !scenarioOutput) return;
    
    const scenario = scenarios[temp];
    tempDisplay.textContent = scenario.temp;
    
    scenarioOutput.innerHTML = `
        <div class="scenario-impacts">
            <h3>Projected Impacts at ${scenario.temp}</h3>
            <ul>
                ${scenario.impacts.map(impact => `<li><i class="fas fa-exclamation-circle"></i> ${impact}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Form Submission Handler
function initFormHandler() {
    const form = document.getElementById('support-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
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
}

// Navbar scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenuBtn || !navLinks) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

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

// Load Leaflet JS and Initialize Migration Map
function loadLeafletAndInitMap() {
    const leafletScript = document.createElement('script');
    leafletScript.src = "https://unpkg.com/leaflet/dist/leaflet.js";
    leafletScript.onload = initMigrationMap;
    document.head.appendChild(leafletScript);
}

function initMigrationMap() {
    const mapElement = document.getElementById('migration-map');
    if (!mapElement) return;
    
    // Create map
    const map = L.map('migration-map').setView([20, 0], 2);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 6,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Global migration flows with more detail
    const flows = [
        { from: [23.685, 90.3563], to: [28.6139, 77.2090], label: 'Bangladesh → India (Flood displacement)' },
        { from: [34.8021, 38.9968], to: [41.9028, 12.4964], label: 'Syria → Italy (Drought & conflict)' },
        { from: [-1.2921, 36.8219], to: [30.0444, 31.2357], label: 'Kenya → Egypt (Drought migration)' },
        { from: [-34.6037, -58.3816], to: [40.7128, -74.0060], label: 'Argentina → USA (Climate impacts)' },
        { from: [15.5527, 32.5599], to: [52.5200, 13.4050], label: 'Sudan → Germany (Desertification)' },
        { from: [4.2105, 101.9758], to: [1.3521, 103.8198], label: 'Malaysia → Singapore (Sea rise)' }
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

// Temperature slider handler
function initTempSlider() {
    const tempSlider = document.getElementById('temp-slider');
    if (!tempSlider) return;
    
    tempSlider.addEventListener('input', (e) => {
        updateScenario(parseFloat(e.target.value));
    });
    
    // Initialize with default value
    updateScenario(1.5);
}

// Initialize all features on page load
document.addEventListener('DOMContentLoaded', function() {
    // Start counter animation
    animateCounter();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize form handler
    initFormHandler();
    
    // Initialize temperature slider
    initTempSlider();
    
    // Load Leaflet and initialize map
    loadLeafletAndInitMap();
    
    // Add loading states for cards
    const cards = document.querySelectorAll('.stat-card, .case-study, .solution-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Remove loading class after delay
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 1000);
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    
    if (loadTime > 3000) {
        console.warn('Page load time is slower than optimal. Consider optimizing images and scripts.');
    }
});

// Analytics simulation
function trackEvent(category, action, label) {
    console.log(`Analytics: ${category} - ${action} - ${label}`);
}

// Track page views
function trackPageView(page) {
    trackEvent('Navigation', 'page_view', page);
}

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.id) {
        trackEvent('Form', 'submit', e.target.id);
    }
});

// Track link clicks
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href) {
        trackEvent('Link', 'click', e.target.href);
    }
});
>>>>>>> e1d7f35 (Add all new files)
