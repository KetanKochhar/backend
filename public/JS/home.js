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
    // document.getElementById('Gender').classList.add('hidden'); // Hide Gender
    document.getElementById('boys').scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to the Girls section and show it
function scrollToGirls() {
    document.getElementById('girls').classList.remove('hidden'); // Show girls
    document.getElementById('boys').classList.add('hidden'); // Hide boys
    // document.getElementById('Gender').classList.add('hidden'); // Hide Gender
    document.getElementById('girls').scrollIntoView({ behavior: 'smooth' });
}


// // Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('boys').classList.add('hidden');
    document.getElementById('girls').classList.add('hidden');
});


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
            // console.log('Session set:', data);
        })
        .catch(error => console.error('Error:', error));
}


  function openSizePopup() {
    document.getElementById("sizeModal").classList.remove("hidden");
  }

  function closeSizePopup() {
    document.getElementById("sizeModal").classList.add("hidden");
  }

  window.addEventListener("DOMContentLoaded", () => {
    const tshirtBoxes = document.querySelectorAll("#boys .style-box, #girls .style-box");
    tshirtBoxes.forEach(box => {
      box.addEventListener("click", openSizePopup);
    });

    // Optional: Close modal when clicking outside the popup
    document.getElementById("sizeModal").addEventListener("click", (e) => {
      if (e.target.id === "sizeModal") {
        closeSizePopup();
      }
    });

    // Add logic for size button clicks (if needed)
    const sizeButtons = document.querySelectorAll(".size-btn");
    sizeButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selectedSize = button.getAttribute("data-size");
        // console.log("Selected size:", selectedSize);
        closeSizePopup(); // Close after selection
      });
    });
  });

  

