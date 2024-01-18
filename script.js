// Main functions used in site

// Basic function to show overlay
function showModal(modalId) {
    // Get modal element
    var modal = document.getElementById(modalId)
    
    // Get overlay element
    var overlay = document.getElementById('overlay');

    // Set modal display to flex
    modal.style.display = 'flex';

    // Set overlay display to block (Shows the overlay)
    overlay.style.display = 'block';
}

function hideOverlay() {
    // Get overlay element
    var overlay = document.getElementById('overlay');

    // Set overlay display to block (Shows the overlay)
    overlay.style.display = 'none';
}