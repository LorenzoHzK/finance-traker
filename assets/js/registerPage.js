document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: senha,
    });

    console.log("Supabase client:", supabaseClient);
    console.log("SIGNUP_ERROR:", error);

    if (error) {
      M.toast({ html: "Erro: " + error.message, classes: "red" });
      return;
    }

    M.toast({
      html: "Conta criada! Verifique seu e-mail para confirmar.",
      classes: "green",
    });

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
