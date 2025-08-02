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

function addToCart(productId) {
    alert("Product " + productId + " added to cart!");
}

  document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelector('.filters');

    // Only apply click behavior on small screens
    function applyToggleIfMobile() {
      if (window.innerWidth <= 768) {
        filters.onclick = function (e) {
          // Prevent checkboxes from triggering collapse
          if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL' || e.target.tagName === 'SUMMARY' || e.target.closest('details')) return;
          filters.classList.toggle('collapsed');
        };
      } else {
        filters.onclick = null;
        filters.classList.remove('collapsed');
      }
    }

    applyToggleIfMobile();
    window.addEventListener('resize', applyToggleIfMobile);
  });


  function applyFilters() {
    const selectedGenders = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(i => i.value);
    const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(i => parseInt(i.value));
    const selectedDiscounts = Array.from(document.querySelectorAll('input[name="discount"]:checked')).map(i => parseInt(i.value));

    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
      const gender = card.getAttribute('data-gender');
      const price = parseFloat(card.getAttribute('data-price'));
      const discount = parseFloat(card.getAttribute('data-discount'));

      let visible = true;

      // Gender filter
      if (selectedGenders.length && !selectedGenders.includes(gender)) {
        visible = false;
      }

      // Price filter
      if (selectedPrices.length && !selectedPrices.some(p => price >= p)) {
        visible = false;
      }

      // Discount filter
      if (selectedDiscounts.length && !selectedDiscounts.some(d => discount >= d)) {
        visible = false;
      }

      card.style.display = visible ? 'block' : 'none';
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    const skeleton = document.getElementById('product-skeleton');
    const productGrid = document.getElementById('product-section');

    setTimeout(() => {
      skeleton.style.display = 'none';
      productGrid.classList.remove('hidden');
    }, 1200); // adjust time as needed
  });

// // function updateFilterBarHeight() {
// //     if (window.innerWidth > 768) {
// //         const container = document.querySelector('.filter-bar-container');
// //         container.style.height = document.body.scrollHeight - 700 + 'px';
// //     }

// //     else {
// //         return;
// //     }

// // }

// window.addEventListener('load', updateFilterBarHeight);
// window.addEventListener('resize', updateFilterBarHeight);
// window.addEventListener('scroll', updateFilterBarHeight);

// document.addEventListener("DOMContentLoaded", function () {
//     const filterSidebar = document.querySelector(".filter-sidebar");
//     const toggleArrow = document.querySelector(".filter-toggle-arrow");

//     if (toggleArrow && filterSidebar) {
//         document.querySelector(".filter-title-bar").addEventListener("click", function () {
//             filterSidebar.classList.toggle("active");
//             toggleArrow.classList.toggle("rotate");
//         });
//     }
// });


// document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
//     cb.addEventListener('change', applyFilters);
// });






