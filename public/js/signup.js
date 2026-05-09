const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  document.getElementById("formMessage").textContent = "";

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
      role
    })
  });

  const data = await response.json();

  const formMessage = document.getElementById("formMessage");

  if (data.success) {
    formMessage.textContent = data.message;
    formMessage.className = "form-message success";
    signupForm.reset();
  } else {
    formMessage.textContent = data.message;
    formMessage.className = "form-message error";
  }
});