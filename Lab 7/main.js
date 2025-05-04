let usersTableBody = document.querySelector("#usersTable tbody");

(async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    for (let user of users) {
      let posts = await fetchPosts(user.id);
      let row = await createTableRow(user, posts);
      usersTableBody.appendChild(row);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
})();

async function fetchPosts(userId) {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  let posts = await res.json();

  let postsWithComments = await Promise.all(
    posts.map(async (post) => {
      let commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
      let comments = await commentsRes.json();
      return {
        title: post.title,
        commentsCount: comments.length
      };
    })
  );

  return postsWithComments;
}

function createTableRow(user, posts) {
  let tr = document.createElement("tr");

  let tdUsername = document.createElement("td");
  tdUsername.textContent = user.username;

  let tdEmail = document.createElement("td");
  tdEmail.textContent = user.email;

  let tdCompany = document.createElement("td");
  tdCompany.textContent = user.company.name;

  let tdGeo = document.createElement("td");
  tdGeo.textContent = `Latitude: ${user.address.geo.lat}, Longtude: ${user.address.geo.lng}`;

  let tdPosts = document.createElement("td");
  let ul = document.createElement("ul");
  posts.forEach(post => {
    let li = document.createElement("li");
    li.textContent = `${post.title} (${post.commentsCount} comments)`;
    ul.appendChild(li);
  });
  tdPosts.appendChild(ul);

  tr.append(tdUsername, tdEmail, tdCompany, tdGeo, tdPosts);
  return tr;
}
