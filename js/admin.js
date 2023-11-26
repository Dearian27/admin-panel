/*//TODO:
  1)check isAdmin
  
  2)submit function
  request to the server
    preventDefault
    validation
    saving to local storage
    redirection
*/

document.onload = function() {
  if(!localStorage.getItem('user')) {
    window.location.href = '/';
  }
}