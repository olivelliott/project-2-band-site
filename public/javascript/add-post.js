// async function

async function newFormHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('input[name="forum-title"]')
    .value.trim();
  const content = document.querySelector('#forum-content').value.trim();

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
