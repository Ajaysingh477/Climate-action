// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Close mobile menu if open
    navMenu.classList.remove('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Initialize charts if evidence section
    if (sectionId === 'evidence') {
        setTimeout(() => {
            initCO2Chart();
            initMigrationChart();
        }, 100);
    }
}

// CO2 Chart - NOAA Data
function initCO2Chart() {
    const canvas = document.getElementById('co2Chart');
    if (!canvas) return;
    
    // Destroy existing chart if any
    if (canvas.chart) {
        canvas.chart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    
    // Real NOAA data
    const data = {
        labels: ['1960', '1970', '1980', '1990', '2000', '2010', '2015', '2020', '2024'],
        datasets: [{
            label: 'Atmospheric CO₂ (ppm)',
            data: [317, 326, 339, 354, 370, 390, 400, 414, 421],
            borderColor: '#c1121f',
            backgroundColor: 'rgba(193, 18, 31, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: '#c1121f',
            pointBorderColor: '#fff',
            pointBorderWidth: 2
        }]
    };
    
    canvas.chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#2d3748',
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + ' ppm CO₂';
                        }
                    }
                }
            },
            scales: {
                y: {
                    min: 300,
                    max: 430,
                    ticks: {
                        font: { size: 12 },
                        color: '#2d3748',
                        callback: function(value) {
                            return value + ' ppm';
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    ticks: {
                        font: { size: 12 },
                        color: '#2d3748'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.05)'
                    }
                }
            }
        }
    });
}

// Migration Projections Chart - World Bank Data
function initMigrationChart() {
    const canvas = document.getElementById('migrationChart');
    if (!canvas) return;
    
    // Destroy existing chart if any
    if (canvas.chart) {
        canvas.chart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    
    // World Bank Groundswell Report 2021 data
    const data = {
        labels: ['Sub-Saharan\nAfrica', 'South Asia', 'Latin\nAmerica', 'North Africa', 'East Asia', 'Eastern\nEurope'],
        datasets: [{
            label: 'Projected Internal Climate Migrants by 2050 (millions)',
            data: [86, 63, 17, 19, 49, 5],
            backgroundColor: [
                '#c1121f',
                '#f77f00',
                '#2a9d8f',
                '#e07a5f',
                '#264653',
                '#8b5a3c'
            ],
            borderWidth: 0,
            borderRadius: 6
        }]
    };
    
    canvas.chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#2d3748',
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + ' million people';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 90,
                    ticks: {
                        font: { size: 12 },
                        color: '#2d3748',
                        callback: function(value) {
                            return value + 'M';
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    ticks: {
                        font: { size: 11 },
                        color: '#2d3748',
                        maxRotation: 0,
                        minRotation: 0
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Smooth scroll for hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const sectionId = href.substring(1);
            showSection(sectionId);
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show home section by default
    showSection('home');
    
    // Log page load time
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
});
