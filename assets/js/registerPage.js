document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const fields = {
    nameField: name,
    emailField: email,
    passwordField: password,
    confirmPasswordField: confirmPassword,
  };

  function showError(message, highlight = []) {
    M.toast({ html: message, classes: "red" });
    highlight.forEach((id) =>
      document.getElementById(id).classList.add("input-error")
    );
  }

  function clearErrors() {
    document
      .querySelectorAll(".input-error")
      .forEach((el) => el.classList.remove("input-error"));
  }

  clearErrors();

  for (const id in fields) {
    if (!fields[id]) {
      showError("Preencha todos os campos!", Object.keys(fields));
      return;
    }
  }

  if (!/^[A-Za-zÀ-ÿ\s]{3,}$/.test(name)) {
    showError("Nome deve ter no mínimo 3 caracteres!", ["nameField"]);
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("E-mail inválido!", ["emailField"]);
    return;
  }

  if (password.length < 6) {
    showError("Senha deve ter no mínimo 6 caracteres!", ["passwordField"]);
    return;
  }

  if (password !== confirmPassword) {
    showError("As senhas não coincidem!", [
      "passwordField",
      "confirmPasswordField",
    ]);
    return;
  }

  const users = JSON.parse(localStorage.getItem("financetrakerUsers")) || [];

  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    showError("Este e-mail já está cadastrado!", ["emailField"]);
    return;
  }

  const newUser = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem("financetrakerUsers", JSON.stringify(users));

  M.toast({
    html: "Conta criada com sucesso! Redirecionando...",
    classes: "green",
  });

  setTimeout(() => {
    window.location.href = "./login_page.html";
  }, 1500);
});
