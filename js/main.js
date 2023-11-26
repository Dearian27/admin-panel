localStorage.getItem('token')
function hiddenBtn(){
  fetch('http://localhost:8080/api/users/check')
  .then((response) => response.json())
  .then((json) => console.log(json));
}



