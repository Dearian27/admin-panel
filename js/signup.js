const accountName = document.querySelector('#name');
const accountEmail = document.querySelector('#email');
const accountPassword = document.querySelector('#password');
const accountRepeatPassword = document.querySelector('#repeat_password');

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  signup();
})

function signup(){
  const token = window.localStorage.getItem('token');
  if(!accountName.value || !accountEmail.value || !accountPassword.value){
    console.warn("Заповніть всі поля");
    return;
  }

  if(accountPassword.value !== accountRepeatPassword.value){
    console.warn("Паролі не співпадають")
    return;
  }

  fetch("http://localhost:8080/api/auth/signup/", {
  method: 'POST',
  body: JSON.stringify({
    name: accountName.value,
    email: accountEmail.value,
    password: accountPassword.value,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${token}`
  },
})
.then ( response => {
  if(response.ok){
    localStorage.setItem('token', response.token)
    window.location.href = '../index.html';
  }
  
})
.catch(err => console.error('Виникла помилка під час виконання запиту:', err))
}
 


