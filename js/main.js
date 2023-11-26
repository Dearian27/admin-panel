const signUpBtn = document.querySelector('#signup');

const token = window.localStorage.getItem('token');

const checkUser = () => {
  fetch("http://localhost:8080/api/users/check", {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
  }
})
.then((response) => response.json())
.then((json) => console.log(json))
}
checkUser();


const renderButtons = (status = undefined) => {

  if(status === 'viewer') {
    signup.classList.remove('active');
    
  } else if(status === 'admin') {
    signup.classList.remove('active');
    
  } else {
    signup.classList.add('active');
  }
}

 



