document.getElementById('openModalBtn').addEventListener('click', () => {
    document.getElementById('addressModal').classList.remove('hidden');
  });
  
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('addressModal').classList.add('hidden');
  });
  
  document.getElementById('userPincode').addEventListener('blur', async () => {
    const pincode = document.getElementById('userPincode').value;
    
    if (pincode.length === 6) {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await res.json();
        
        if (data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          document.getElementById('userCity').value = postOffice.District || '';
          document.getElementById('userArea').value = postOffice.Name || '';
        } else {
          alert("Invalid Pincode. Please enter a valid one.");
          document.getElementById('userCity').value = '';
          document.getElementById('userArea').value = '';
        }
      } catch (err) {
        console.error(err);
        alert("Error fetching location. Try again.");
      }
    }
  });
  
  document.getElementById('addressForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const address = document.getElementById('userAddress').value;
    const pincode = document.getElementById('userPincode').value;
    const city = document.getElementById('userCity').value;
    const area = document.getElementById('userArea').value;
  
    // Here you can send this data to the server
    console.log({ address, pincode, city, area });
    alert(`Address saved:\n${address}, ${area}, ${city} - ${pincode}`);
    
    document.getElementById('addressModal').classList.add('hidden');
  });
  const loadingText = document.createElement('p');
  loadingText.innerText = 'Fetching location...';
  loadingText.classList.add('text-sm', 'text-gray-500', 'mb-2');

  document.getElementById('userPincode').addEventListener('blur', async () => {
    const pincode = document.getElementById('userPincode').value;
    const modal = document.getElementById('addressModal');
    const cityInput = document.getElementById('userCity');
    const areaInput = document.getElementById('userArea');

    if (pincode.length === 6) {
      modal.appendChild(loadingText);
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await res.json();
        if (data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          cityInput.value = postOffice.District || '';
          areaInput.value = postOffice.Name || '';
        } else {
          alert("Invalid Pincode. Please enter a valid one.");
          cityInput.value = '';
          areaInput.value = '';
        }
      } catch (err) {
        alert("Error fetching location. Try again.");
      } finally {
        loadingText.remove();
      }
    }
  });

  document.getElementById('addressForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const address = document.getElementById('userAddress').value;
    const pincode = document.getElementById('userPincode').value;
    const city = document.getElementById('userCity').value;
    const area = document.getElementById('userArea').value;

    const user_id = document.getElementById("userid").innerHTML // This should be passed from your EJS backend
    console.log(user_id, address, pincode, city, area)
    try {
      const res = await fetch('api/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id, address, pincode, city, area })
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        document.getElementById('addressModal').classList.add('hidden');
      } else {
        alert(result.error || 'Failed to save address');
      }
    } catch (error) {
      alert('Network error while saving address');
      console.error(error);
    }
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
            console.log('Session set:', data);
        })
        .catch(error => console.error('Error:', error));
}

function GoToRedesign(id, type, name, price, img) {
    console.log(id, type, name, price);
    // alert('Clicked element id: ' + id + "\n\n" + type);
    setSession("did", id)
    // setSession("type",type)
    // setSession("name",name)
    // setSession("price",price)
    // setSession("img",img)
    confirm("going to another page" + id)
    location.href = "/cart"; // Redirect to redesign page
}
