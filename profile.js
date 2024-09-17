function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

   
   let url = "https://66e7e69db17821a9d9da6ed1.mockapi.io/SignUp";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                let user = JSON.parse(localStorage.getItem('user'));
                
                
              let name=document.getElementById('usernameDisplay');
               name.textContent = user.name 
               let email= document.getElementById('emailDisplay');
               email.textContent = user.email 
            }
                
        });






