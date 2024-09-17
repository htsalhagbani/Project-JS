function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

let url="https://66e7e69db17821a9d9da6ed1.mockapi.io/Blog";

fetch(url)
.then(response => response.json())
.then(data => {
    let cardContainer = document.getElementById('cardContainer');

    data.forEach(item => {

        let card = document.createElement('div');
        card.classList.add('col-md-4', 'col-sm-12', 'mb-3');

        card.innerHTML = `
            <div class="card ">
                <img class="card-img-top cardimg" src="${item.imageURL}" alt="Card image">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="#" class="btn btn-danger" id="deletebtn" onclick="handleDelete('${item.id}', this)">Delete</a>
                </div>
            </div>
        `;

        cardContainer.appendChild(card);
    });


})

function handleDelete(id, button) {
    fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            button.closest('.col-md-4').remove();
        } else {
            console.error('Failed to delete the item');
        }
    })
  
}

