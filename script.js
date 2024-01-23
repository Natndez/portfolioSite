// Main functions used in site



// Basic function to show overlay
function showModal(modalId) {
    // Get modal element
    var modal = document.getElementById(modalId)
    
    // Get overlay element
    var overlay = document.getElementById('overlay');

    // Set modal display to flex
    modal.style.display = 'flex';

    // Disabling scrolling on the body
    document.body.style.overflow = 'hidden';
    

    // Set overlay display to block (Shows the overlay)
    overlay.style.display = 'block';
}

function hideModal() {
    // Getting the modal
    var modals = document.querySelectorAll('.project-modal');
    
    // Get overlay element
    var overlay = document.getElementById('overlay');

    // Set all modal displays to none (Hides modal)
    modals.forEach(function(modal) {
        modal.style.display = 'none';
    });
    
    // Reenable scrolling on the body
    document.body.style.overflow = '';

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

