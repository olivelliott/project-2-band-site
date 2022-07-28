// async function

async function commentFormHandler(event) {
    event.preventDefault();

    // querySelector for comment_text
    const comment_text = document
        .querySelector("#comment-body")
        .value.trim();

    // querySelector for post_id
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    // conditional if there is comment-text value

    // response: await fetch ('/api/comments')
    // method: 'POST'
    // stringify post-id, comment-text

    if (comment_text) {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({
                post_id,
                comment_text,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // if response.ok reload
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

// eventListener for 'submit' button in comment form
document
    .querySelector("#new-comment-form")
    .addEventListener("submit", commentFormHandler);