
if(!localStorage.getItem('token')) {
  window.location.href = '../';
}

const token = localStorage.getItem('token');
fetch("http://localhost:8080/api/users/check/", {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${token}`
  },
})
.then (response => {
  if(response.ok && response.user.status === 'admin') {
    getUsers();
  } else {
    window.location.href = '../index.html';
  }
})
.catch(err => console.error('Виникла помилка під час виконання запиту:', err))

const getUsers = () => {
  fetch("http://localhost:8080/api/users/", {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${token}`
    },
  })
  .then (response => {
    if(response.ok) {
      renderUsers(response.users);
    }
    })
  .catch(err => console.error('Виникла помилка під час виконання запиту:', err))
  
  console.log('token')
}

const renderUsers = (users) => {
  
}