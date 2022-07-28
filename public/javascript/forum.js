async function forumHandler(req, res) {
  const forumLink = document.getElementById("forum-link");
  console.log(forumLink);

  document.location.replace('/forum/posts/' + forumLink)
}

document.querySelector("#forum-link").addEventListener("click", forumHandler);
