
function SignUp() {
    window.location.href = 'signup.html';
}



let btnLogin=document.getElementById('btnLogin');

let togglePassword = document.getElementById('togglePassword');
let passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        let type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
        togglePassword.classList.toggle('bi-eye');
        togglePassword.classList.toggle('bi-eye-slash');
    });

btnLogin.addEventListener('click',async(event)=>{
    event.preventDefault();
    let name = document.getElementById('name');
    let password = document.getElementById('password');
    if (name.value === '') {
        alert('Name must be enter');
        return;
    }

  
    if (password.value === '') {
        alert('password must be enter');
        return;
    }
let url="https://66e7e69db17821a9d9da6ed1.mockapi.io/SignUp";

await fetch(url)
  .then((response) =>  response.json())
  .then((data) => {
    console.log(data);
    
    let user=data.find(item => item.name === name.value && item.password === password.value);
    
    if (user) {
         
                localStorage.setItem('user', JSON.stringify({
                    name: user.name,
                    email: user.email
                }));

                window.location.href = 'Home.html';

    } else {
        alert('Invalid username or password');
    }
  });
})