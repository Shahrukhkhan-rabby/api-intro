function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => displayPosts(posts));
}
loadPosts();

function displayPosts(posts) {
  const postContainer = document.getElementById("posts");
  for (const post of posts) {
      const div = document.createElement("div");
      div.classList.add('post');
      div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      `;
      postContainer.appendChild(div);
    console.log(post);
  }
}

function addAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'This is my posts',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}