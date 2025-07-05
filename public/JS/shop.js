function addToCart(productId) {
    alert("Product " + productId + " added to cart!");
}

function applyFilters() {
    const selectedGenders = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(i => i.value);
    const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;
    const selectedOffers = Array.from(document.querySelectorAll('input[name="offer"]:checked')).map(i => parseInt(i.value));

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
        if (selectedPrice === 'below500' && price >= 500) visible = false;
        if (selectedPrice === '500to1000' && (price < 500 || price > 1000)) visible = false;
        if (selectedPrice === 'above1000' && price <= 1000) visible = false;

        // Offer filter
        if (selectedOffers.length && !selectedOffers.some(o => discount >= o)) {
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
