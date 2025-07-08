function addToCart(productId) {
    alert("Product " + productId + " added to cart!");
}

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

function updateFilterBarHeight() {
    if (window.innerWidth > 768) {
        const container = document.querySelector('.filter-bar-container');
        container.style.height = document.body.scrollHeight - 700 + 'px';
    }

    else {
        return;
    }

}

window.addEventListener('load', updateFilterBarHeight);
window.addEventListener('resize', updateFilterBarHeight);
window.addEventListener('scroll', updateFilterBarHeight);

document.addEventListener("DOMContentLoaded", function () {
    const filterSidebar = document.querySelector(".filter-sidebar");
    const toggleArrow = document.querySelector(".filter-toggle-arrow");

    if (toggleArrow && filterSidebar) {
        document.querySelector(".filter-title-bar").addEventListener("click", function () {
            filterSidebar.classList.toggle("active");
            toggleArrow.classList.toggle("rotate");
        });
    }
});


document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
});
