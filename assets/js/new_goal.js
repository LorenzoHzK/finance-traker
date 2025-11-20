document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("nome").value;
  const total = parseFloat(document.getElementById("valor-total").value);
  const current = parseFloat(document.getElementById("valor-atual").value);
  const monthly = parseFloat(
    document.getElementById("valor-mensal")?.value || 0
  );
  const deadline = document.getElementById("data").value || null;

  console.log("Salvando meta...");

  const { data: user } = await supabaseClient.auth.getUser();
  if (!user?.user) {
    alert("Você precisa estar logado.");
    return;
  }

  const { error } = await supabaseClient.from("goals").insert({
    user_id: user.user.id,
    title,
    total,
    current,
    monthly,
    deadline,
  });

  if (error) {
    console.log("Erro Supabase:", error);
    alert("Erro ao salvar a meta.");
  } else {
    const modal = M.Modal.getInstance(document.getElementById("modal1"));
    modal.open();

    setTimeout(() => {
      window.location.href = "./goal_page.html";
    }, 1000);
  }
});
