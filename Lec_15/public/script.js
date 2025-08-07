const signupform = document.querySelector("#signupform");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

function addUser(username, password) {
  let newUser = {
    username: username,
    password: password,
  };
  fetch("/adduser", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        alert(data.message);
      } else {
        alert(data.err);
      }
      signupform.reset();
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  addUser(username.value, password.value);
});
