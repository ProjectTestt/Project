// Dark Mode Initialization - This script must run BEFORE page renders
(function() {
    const html = document.documentElement;
    
    // Check if dark mode was previously enabled and apply it IMMEDIATELY
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        html.setAttribute('data-theme', 'dark');
    }
})();

// Also apply on document ready to ensure it works
document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        html.setAttribute('data-theme', 'dark');
    }
});