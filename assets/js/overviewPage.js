document.addEventListener("DOMContentLoaded", async () => {
  try {
    const {
      data: { session },
      error: sessionError,
    } = await supabaseClient.auth.getSession();

    if (sessionError || !session) {
      console.error("Usuário não autenticado.");
      return;
    }

    const userId = session.user.id;

    const { data: goals, error } = await supabaseClient
      .from("goals")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Erro ao carregar metas:", error);
      return;
    }

    if (!goals || goals.length === 0) {
      document.querySelector(".card-value:nth-child(1)").innerText = "0";
      document.querySelector(".card-value:nth-child(2)").innerText = "0";
      document.querySelector(".card-value:nth-child(3)").innerText = "R$ 0";
      return;
    }

    const metasAtingidas = goals.filter((g) => g.is_completed === true).length;
    const metasEmAndamento = goals.filter(
      (g) => g.is_completed === false
    ).length;

    const totalEconomizado = goals.reduce((total, g) => {
      return total + (g.saved_value ?? 0);
    }, 0);

    document.querySelectorAll(".card-value")[0].innerText = metasAtingidas;
    document.querySelectorAll(".card-value")[1].innerText = metasEmAndamento;
    document.querySelectorAll(".card-value")[2].innerText =
      "R$ " + totalEconomizado.toLocaleString("pt-BR");
  } catch (e) {
    console.error("Erro inesperado:", e);
  }
});
