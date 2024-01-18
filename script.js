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

function hideModal() {
    // Getting the modal
    var modal = document.querySelector('.project-modal');
    
    // Get overlay element
    var overlay = document.getElementById('overlay');

    // Set modal display to none (Hides modal)
    modal.style.display = 'none';
    
    // Set overlay display to none (Hides the overlay)
    overlay.style.display = 'none';
}
// Code to use escape key to close modal
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') { // If the key pressed is the escape key
            hideModal();
        }
    });
});

