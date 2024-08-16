function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => displayData(data))
    .catch(error=>console.error('Error loading Data', error));
}

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => displayUsers(users))
    .catch(error=>console.error('Error loading Users', error));
}
function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => console.log(posts))
      .catch((error) => console.error("Error loading Posts", error));
}
function displayUsers(users) {
    const ul = document.getElementById('users');
    // console.log(users);
    for (const user of users) {
        console.log(user)
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}

function displayData(todo) {
  console.log(todo);
}
