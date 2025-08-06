function getUSers(URL) {
  fetch(URL)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((user) => {
        displayUser(user);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

getUSers("https://jsonplaceholder.typicode.com/users");

function displayUser(user) {
  let li = document.createElement("li");
  li.innerHTML = ` <div class="user-info">
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div class="user-btn">
                <button class="delete">delete</button>
                <button class="edit">edit</button>
            </div>`;
  let userContainer = document.querySelector("#user-container");
  userContainer.appendChild(li); 
}

displayData(data);
