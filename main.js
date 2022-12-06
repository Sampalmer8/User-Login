document.getElementById("login").addEventListener("click", login);

function login() {
  let userName = document.getElementById("user").value;
  let password = document.getElementById("pass").value;

  if (userName === "admin" && password === "1234") {
    alert("Login Successful");
  } else if (userName !== "admin") {
    alert("Username Invalid");
  } else {
    alert("Password Invalid");
  }
}
