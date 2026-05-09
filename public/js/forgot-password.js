const forgotPasswordForm = document.getElementById("forgotPasswordForm");

forgotPasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formMessage = document.getElementById("formMessage");
  const resetLinkBox = document.getElementById("resetLinkBox");
  const resetLink = document.getElementById("resetLink");

  formMessage.textContent = "";
  resetLinkBox.style.display = "none";

  const email = document.getElementById("email").value.trim();

  const response = await fetch("/api/auth/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  });

  const data = await response.json();

  if (data.success) {
    formMessage.textContent = data.message;
    formMessage.className = "form-message success";

    resetLink.href = data.resetUrl;
    resetLink.textContent = data.resetUrl;
    resetLinkBox.style.display = "block";
  } else {
    formMessage.textContent = data.message;
    formMessage.className = "form-message error";
  }
});