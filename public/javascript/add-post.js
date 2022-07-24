// async function

async function newFormHandler(event) {
    event.preventDefault();

    // title & content querySelector from forum-home element
    // ! TO DO : place a form in the forum-home to add a post

    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('input[name="content"]').value;

    // response: fetch('/api/posts)
    // method: POST

    // stringify title & content

    const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
            title,
            content,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    // if response.ok reload the page

    if (response.ok) {
        document.location.replace("/forum");
    } else {
        alert(response.statusText);
    }
}

// event listener for the forum-home // new post form // submit button

document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);