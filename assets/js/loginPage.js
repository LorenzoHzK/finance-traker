document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value;
  const password = passwordInput.value;

  const loginBox = document.getElementById("loginBox");

  emailInput.addEventListener("input", () => clearError());
  passwordInput.addEventListener("input", () => clearError());

  function showError(message) {
    M.toast({ html: message, classes: "red" });

    document.getElementById("emailField").classList.add("input-error");
    document.getElementById("passwordField").classList.add("input-error");

    loginBox.classList.add("shake");
    setTimeout(() => loginBox.classList.remove("shake"), 400);
  }

  function clearError() {
    document.getElementById("emailField").classList.remove("input-error");
    document.getElementById("passwordField").classList.remove("input-error");
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    showError("Email ou senha incorretos!");
    return;
  }

  M.toast({ html: "Login realizado!", classes: "green" });

  window.location.href = "/index.html";
});
