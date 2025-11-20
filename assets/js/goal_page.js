async function carregarMetas() {
  const lista = document.querySelector(".goals-list");
  lista.innerHTML = "<p>Carregando metas...</p>";

  const { data: user } = await supabaseClient.auth.getUser();
  if (!user?.user) {
    lista.innerHTML = "<p>Você precisa fazer login.</p>";
    return;
  }

  const { data: goals, error } = await supabaseClient
    .from("goals")
    .select("*")
    .eq("user_id", user.user.id);

  if (error) {
    lista.innerHTML = "<p>Erro ao carregar as metas.</p>";
    return;
  }

  lista.innerHTML = "";

  goals.forEach((g) => {
    const percent = Math.min(100, (g.current / g.total) * 100);

    const item = `
      <div class="goal-item">
        <div class="goal-info">
          <div class="goal-title">${g.title}</div>
          <div class="goal-amount">R$ ${g.current} de R$ ${g.total}</div>
        </div>
        <div class="goal-progress">
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${percent}%"></div>
          </div>
          <div class="progress-percentage">${percent.toFixed(1)}%</div>
        </div>
      </div>
    `;
    lista.insertAdjacentHTML("beforeend", item);
  });
}

document.addEventListener("DOMContentLoaded", carregarMetas);
