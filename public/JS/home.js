function scrollToDesignSteps() {
    document.getElementById('design-steps').scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to the footer section
function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to the Gender section and show it
function scrollToGender() {
    document.getElementById('Gender').scrollIntoView({ behavior: 'smooth' });
    // Ensure the Gender section is visible, though it should be by default
    document.getElementById('Gender').classList.remove('hidden');
    document.getElementById('boys').classList.add('hidden'); // Hide boys
    document.getElementById('girls').classList.add('hidden'); // Hide girls
}

// Function to scroll to the Boys section and show it
function scrollToBoys() {
    document.getElementById('boys').classList.remove('hidden'); // Show boys
    document.getElementById('girls').classList.add('hidden'); // Hide girls
    document.getElementById('Gender').classList.add('hidden'); // Hide Gender
    document.getElementById('boys').scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to the Girls section and show it
function scrollToGirls() {
    document.getElementById('girls').classList.remove('hidden'); // Show girls
    document.getElementById('boys').classList.add('hidden'); // Hide boys
    document.getElementById('Gender').classList.add('hidden'); // Hide Gender
    document.getElementById('girls').scrollIntoView({ behavior: 'smooth' });
}


// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Initialize display state for sections
    // All specific style sections are hidden by default, only Gender is shown
    document.getElementById('boys').classList.add('hidden');
    document.getElementById('girls').classList.add('hidden');
    // Ensure Gender section is visible on load if desired, otherwise add 'hidden' here too
    // document.getElementById('Gender').classList.remove('hidden'); // uncomment if you want Gender to be always visible
});
// document.querySelectorAll('.style-box').forEach(box => {
//     box.addEventListener('click', () => {
//         window.location.href = 'design.html';
//     });
// });

function setSession(key, value) {
    sessionStorage.setItem(key, value);
    fetch('/set-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key, value })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Session set:', data);
        })
        .catch(error => console.error('Error:', error));
}