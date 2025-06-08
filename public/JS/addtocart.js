function removeFromCart(itemText) {
    alert("🛍️ " + itemText + " removed from cart!");
}

function checkout() {
    alert("🎉 Proceeding to checkout... Get ready to rock your new style!");
}

document.addEventListener("DOMContentLoaded", () => {
    updateTotal();

    // Increment Quantity
    document.querySelectorAll(".increment").forEach(button => {
        button.addEventListener("click", async (e) => {
            const cartItem = e.target.closest(".cart-item");
            const input = e.target.previousElementSibling;
            const itemId = cartItem.dataset.itemId;
            const newQuantity = parseInt(input.value) + 1;

            const response = await fetch("/update-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ itemId, newQuantity })
            });

            if (response.ok) {
                const updatedItem = await response.json();
                input.value = updatedItem.quantity;
                cartItem.querySelector(".price").textContent = `₹${updatedItem.price}`;
                cartItem.querySelector(".total").textContent = `₹${(updatedItem.price * updatedItem.quantity).toFixed(2)}`;
                updateTotal();
            } else {
                alert("Failed to update quantity.");
            }
        });
    });

    // Decrement Quantity
    document.querySelectorAll(".decrement").forEach(button => {
        button.addEventListener("click", async (e) => {
            const cartItem = e.target.closest(".cart-item");
            const input = e.target.nextElementSibling;
            const itemId = cartItem.dataset.itemId;
            const newQuantity = Math.max(1, parseInt(input.value) - 1);

            const response = await fetch("/update-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ itemId, newQuantity })
            });

            if (response.ok) {
                const updatedItem = await response.json();
                input.value = updatedItem.quantity;
                cartItem.querySelector(".price").textContent = `₹${updatedItem.price}`;
                cartItem.querySelector(".total").textContent = `₹${(updatedItem.price * updatedItem.quantity).toFixed(2)}`;
                updateTotal();
            } else {
                alert("Failed to update quantity.");
            }
        });
    });

    // Manual Input Change
    document.querySelectorAll(".item-quantity").forEach(input => {
        input.addEventListener("change", async () => {
            if (parseInt(input.value) < 1) input.value = 1;
            const cartItem = input.closest(".cart-item");
            const itemId = cartItem.dataset.itemId;
            const newQuantity = parseInt(input.value);

            const response = await fetch("/update-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ itemId, newQuantity })
            });

            if (response.ok) {
                const updatedItem = await response.json();
                cartItem.querySelector(".price").textContent = `₹${updatedItem.price}`;
                cartItem.querySelector(".total").textContent = `₹${(updatedItem.price * updatedItem.quantity).toFixed(2)}`;
                updateTotal();
            } else {
                alert("Failed to update quantity.");
            }
        });
    });

    // Update total for all items
    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            const itemTotal = parseFloat(item.querySelector(".total").textContent.replace("₹", ""));
            total += itemTotal;
        });
        document.getElementById("total-price").textContent = `Total: ₹${total.toFixed(2)}`;
    }
});
