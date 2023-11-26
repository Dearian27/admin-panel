
const token = window.localStorage.getItem('token');

console.log(token)



  fetch("http://localhost:8080/api/users/check", {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((response) => response.json())
  .then((json) => console.log(json))


 



