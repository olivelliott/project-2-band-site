async function showHandler() {
  const showLink = document.getElementById('show-link');
  window.open(showLink);
}

document.querySelector('#show-link').addEventListener('click', showHandler);
