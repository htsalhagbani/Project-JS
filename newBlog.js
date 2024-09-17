
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

let btnSubmit=document.getElementById('addBlog');
let url ="https://66e7e69db17821a9d9da6ed1.mockapi.io/Blog";

btnSubmit.addEventListener('click', function(event) {
    event.preventDefault(); 

    let title = document.getElementById('titleInput').value.trim();
    let description = document.getElementById('descInput').value.trim();
    let imageURL = document.getElementById('imageURL').value.trim();

     if (!title || !description || !imageURL) {
        alert('Please fill all the fields.');
        return;
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                title: title,
                description: description,
                imageURL: imageURL
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Blog added successfully!');
      document.getElementById('bgform').reset();   
 })
   
});


