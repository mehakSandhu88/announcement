var users = ['Mehak', 'Bailey', 'Fish', 'Fishy'];
var passwords = ['pass1', 'pass2', 'pass3', 'pass4'];
var correct = false;
var username;
var password;
function login() {
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  for (var i = 0; i < users.length; i++) {
    if (users[i] == username && passwords[i] == password) {
      correct = true;
    };
  }

  if (correct == true) {
    location.href = "./creator.html"
    localStorage.setItem("username", username);
  } else {
    alert("Your username or password is incorrect. Please try again")
  }

}
//if input matches username with password you login otherwise it says incorrect 
