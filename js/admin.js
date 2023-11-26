const list = document.querySelector("#list");
let allUsers;
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
  if(!response.ok) {
    window.location.href = '../index.html';
    return;
  }
  return response.json();
})
.then (response => {
  if(response?.user?.status === 'admin') {
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
      return response.json()
    } else return;
  })
  .then (response => {
      renderUsers(response.users);
      console.log("new");
    })
  .catch(err => console.error('Виникла помилка під час виконання запиту:', err))  
}

const renderUsers = (users) => {
  allUsers = users;
  const newUsers = users.map(user => {
    return `
      <div class="user">
        <div class="user_info">
          <h3>${user.name}</h3>
          <p>${user.email}</p>
        </div>
        ${user.status !== 'admin' ?
          `<button onclick="deleteUser" class="delete" data-id="${user._id}">Delete</button>`
          : ''
        }
      </div>
    `
  })
  list.innerHTML = newUsers.join('');
}

window.addEventListener('click', (event) => {
  if(event.target.dataset.id) {
    deleteUser(event.target.dataset.id);
  }
})

const deleteUser = (id) => {
  fetch(`http://localhost:8080/api/users/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${token}`
    },
  })
  .then (response => {
    if(response.ok) {
      allUsers = allUsers.filter(user => user._id !== id);
      renderUsers(allUsers);
    } else return;
  })
}