async function getCommentData() {
  try {
    let res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
function addUser(email, password) {
  axios
    .post("/user", {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

getCommentData();
addUser("suchet27@gmail.com", "12345");
getCommentData();
