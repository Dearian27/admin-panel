/*//TODO:
  1)get form
  
  2)submit function
    preventDefault
    validation
    request to the server
    saving to local storage
    redirection
*/
const accountEmail = document.querySelector('#email');
const accountPassword = document.querySelector('#password');


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  signin();
})

function signin(){

  const token = window.localStorage.getItem('token');

  fetch("http://localhost:8080/api/auth/signin/", {
    method: 'POST',
    body: JSON.stringify({
    email: accountEmail.value,
    password: accountPassword.value
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