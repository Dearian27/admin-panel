const signUpBtn = document.querySelector('#signup');
const signInBtn = document.querySelector('#signin')
const adminBtn = document.querySelector('#admin')
const signoutBtn = document.querySelector('#signout')

const token = window.localStorage.getItem('token');
const currentStatus = window.localStorage.getItem('status');

const checkUser = () => {
  fetch("http://localhost:8080/api/users/check", {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
  }
})
.then(response => response.json())
.then( response => {
  console.log(response)
  localStorage.setItem('status', response.user.status)
})
}
checkUser();

function exit(){
  localStorage.removeItem('token');
  localStorage.removeItem('status')
  checkUser();
}

const renderButtons = (currentStatus = undefined) => {

  if(currentStatus == 'viewer') {
    adminBtn.classList.add('no_active');
    signoutBtn.classList.add('active');
    signup.classList.add('no_active');
    signin.classList.add('no_active');
  } else if(currentStatus == 'admin') {
    adminBtn.classList.add('active');
    signoutBtn.classList.add('active');
    signup.classList.add('no_active');
    signin.classList.add('no_active');
  } else {
    adminBtn.classList.add('no_active');
    signoutBtn.classList.add('no_active');
    signup.classList.add('active');
    signin.classList.add('active');
  }
}

renderButtons(currentStatus);
 



