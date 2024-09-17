
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
        console.log(item);
        
        let card = document.createElement('div');
        card.classList.add('col-md-4', 'col-12', 'mb-3');

        card.innerHTML = `
            <div class="card cardHome">
                <img class="card-img-top cardimg" src="${item.imageURL}" >
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        `;

        cardContainer.appendChild(card);
    });
})
