const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = "";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await response.json();

  if (data.success) {
    formMessage.textContent = data.message;
    formMessage.className = "form-message success";

    window.location.href = data.redirectUrl;
  } else {
    formMessage.textContent = data.message;
    formMessage.className = "form-message error";
  }
});