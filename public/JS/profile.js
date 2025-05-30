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

function GoToRedesign(id, type) {
    console.log(type);
    alert('Clicked element id: ' + id + "\n\n" + type);
    setSession("did",id)
    setSession("type",type)
    location.href = "/redesign"; // Redirect to redesign page
}
