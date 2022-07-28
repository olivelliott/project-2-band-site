async function showHandler(req, res) {
    const showLink = document.getElementById('show-link')
    console.log(showLink);

    window.open(showLink);


}

// function showTest(showLink) {
//     console.log(showLink)
//     window.location.replace( showLink);
// }

document.querySelector('#show-link').addEventListener('click', showHandler);