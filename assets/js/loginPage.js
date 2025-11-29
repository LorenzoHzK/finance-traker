document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const email = emailInput.value.trim();
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

  if (!email || !password) {
    showError("Preencha todos os campos!");
    return;
  }

  if (email.includes("@")) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("E-mail inválido!");
      return;
    }
  } else {
    const usernameRegex = /^[^\s]{3,}$/;
    if (!usernameRegex.test(email)) {
      showError("Nome de usuário deve ter no mínimo 3 caracteres!");
      return;
    }
  }

  const passwordRegex = /^.{6,}$/;
  if (!passwordRegex.test(password)) {
    showError("Senha deve ter no mínimo 6 caracteres!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("financetrakerUsers")) || [];

  const user = users.find(
    (u) =>
      (u.email && u.email.toLowerCase() === email.toLowerCase()) ||
      (u.username && u.username.toLowerCase() === email.toLowerCase())
  );

  if (!user || user.password !== password) {
    showError("Email/usuário ou senha incorretos!");
    return;
  }

  M.toast({ html: "Login realizado com sucesso!", classes: "green" });

  const loggedUser = {
    id: user.id,
    username: user.username,
    email: user.email,
    name: user.name,
    loginDate: new Date().toISOString(),
  };

  localStorage.setItem("financetrakerLoggedUser", JSON.stringify(loggedUser));

  setTimeout(() => {
    window.location.href = "/index.html";
  }, 500);
});
