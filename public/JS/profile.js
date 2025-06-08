// Modal handling
document.getElementById('openModalBtn')?.addEventListener('click', () => {
    document.getElementById('addressModal').classList.remove('hidden');
});

document.getElementById('closeModalBtn')?.addEventListener('click', () => {
    document.getElementById('addressModal').classList.add('hidden');
});

document.getElementById('openUpdateBtn')?.addEventListener('click', () => {
    const address = document.getElementById('address').innerText;
    const pincode = document.getElementById('pincode').innerText;
    const city = document.getElementById('city').innerText;
    const area = document.getElementById('area').innerText;

    document.getElementById('userAddress').value = address || '';
    document.getElementById('userPincode').value = pincode || '';
    document.getElementById('userCity').value = city || '';
    document.getElementById('userArea').value = area || '';

    document.getElementById('addressModal').classList.remove('hidden');
});

document.getElementById('userPincode').addEventListener('blur', async () => {
    const pincode = document.getElementById('userPincode').value;
    if (pincode.length === 6) {
        const loading = document.getElementById('loadingPincodeStatus');
        loading.classList.remove('hidden');
        try {
            const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await res.json();
            if (data[0].Status === 'Success') {
                const postOffice = data[0].PostOffice[0];
                document.getElementById('userCity').value = postOffice.District || '';
                document.getElementById('userArea').value = postOffice.State || '';
            } else {
                alert('Invalid Pincode.');
            }
        } catch (error) {
            alert('Failed to fetch pincode data.');
        } finally {
            loading.classList.add('hidden');
        }
    }
});

document.getElementById('addressForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const user_id = document.getElementById('userid').innerText;
    const first_name = document.getElementById('userFirstName').value;
    const last_name = document.getElementById('userLastName').value;
    const phone = document.getElementById('userPhone').value;
    const address = document.getElementById('userAddress').value;
    const pincode = document.getElementById('userPincode').value;
    const city = document.getElementById('userCity').value;
    const area = document.getElementById('userArea').value;

    try {
        const res = await fetch('/api/update-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id, first_name, last_name, phone, address, pincode, city, area })
        });

        const result = await res.json();
        if (res.ok) {
            alert(result.message);
            location.reload();
        } else {
            alert(result.error || 'Failed to update profile');
        }
    } catch (error) {
        alert('Network error while saving profile');
        console.error(error);
    }
});


// Toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white text-sm transition-all duration-300 transform translate-y-0 opacity-100 z-50 ${type === 'success' ? 'bg-green-600' : 'bg-yellow-600'
        }`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add to cart
// async function addToCart(designId, type, name, price) {
//     const userId = document.getElementById('userid').textContent;
//     const payload = {
//         user_id: userId,
//         design_id: designId,
//         quantity: 1,
//         size: 'M' // Modify if size selection is available
//     };

//     try {
//         const response = await fetch('/api/add-to-cart', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload)
//         });
//         const result = await response.json();
//         if (!response.ok) {
//             throw new Error(result.error || 'Failed to add to cart');
//         }
//         showToast(result.message, 'success');
//         updateButtonText(); // Update UI after successful addition
//     } catch (error) {
//         showToast(error.message || 'Error adding to cart', 'warning');
//         console.error('Add to cart error:', error);
//     }
// }

// Update button text based on server cart
// async function updateButtonText() {
//     const userId = document.getElementById('userid').textContent;
//     try {
//         const response = await fetch(`/api/cart?user_id=${userId}`);
//         const cartItems = await response.json();
//         document.querySelectorAll('.bg-blue-600.text-white.px-6.py-3.rounded-lg').forEach(button => {
//             const section = button.closest('section');
//             const designId = section.querySelector('span.text-gray-800').textContent;
//             const item = cartItems.find(item => item.design_id === designId);
//             const quantity = item ? item.quantity : 0;
//             button.textContent = `Order now${quantity > 0 ? ` (${quantity})` : ''}`;
//         });
//     } catch (error) {
//         console.error('Error fetching cart for button update:', error);
//     }
// }

// Add event listeners to "Add to Cart" buttons
// document.querySelectorAll('.bg-blue-600.text-white.px-6.py-3.rounded-lg').forEach(button => {
//     button.addEventListener('click', async (e) => {
//         e.stopPropagation();
//         const section = button.closest('section');
//         const designId = section.querySelector('span.text-gray-800').textContent;
//         const type = section.querySelectorAll('span.text-gray-800')[1].textContent;
//         const name = section.querySelector('h2').textContent;
//         const price = section.querySelector('#price').textContent;
//         await addToCart(designId, type, name, price);
//     });
// });

// Initialize button text on page load
// document.addEventListener('DOMContentLoaded', updateButtonText);

// // Redirect to redesign page
// function GoToRedesign(id) {
//     sessionStorage.setItem('did', id);
//     location.href = '/cart';
// }

// function GoToRedesign(id, type, name, price, img) {
//     console.log(id, type, name, price);
//     // alert('Clicked element id: ' + id + "\n\n" + type);
//     setSession("did", id)
//     // setSession("type",type)
//     // setSession("name",name)
//     // setSession("price",price)
//     // setSession("img",img)
//     confirm("going to another page" + id)
//     location.href = "/cart"; // Redirect to redesign page
// }

async function deleteDesign(id) {
    try {
        const response = await fetch(`/api/delete-design/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            location.reload();
            // Optionally remove the design from UI
        } else {
            alert(result.error || 'Delete failed');
        }
    } catch (error) {
        console.error('Client-side delete error:', error);
        alert('An error occurred while deleting');
    }
}

document.getElementById('cancelButton').addEventListener('click', () => {
    const modal = document.getElementById('addressModal');
    const modalContent = document.getElementById('modalContent');
    modal.classList.add('hidden');
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
});


