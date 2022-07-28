// async function
async function newsletterSignupHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#newsletter-email").value.trim();

  console.log(email);
  if (email) {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Email Added!");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".newsletter-signup")
  .addEventListener("submit", newsletterSignupHandler);
