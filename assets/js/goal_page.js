function carregarMetas() {
  const lista = document.querySelector(".goals-list");
  const template = lista.querySelector(".template");

  lista
    .querySelectorAll(".goal-item:not(.template)")
    .forEach((el) => el.remove());

  const loggedUser = JSON.parse(
    localStorage.getItem("financetrakerLoggedUser")
  );

  if (!loggedUser) {
    lista.innerHTML += "<p>Você precisa fazer login.</p>";
    return;
  }

  const allGoals = JSON.parse(localStorage.getItem("financetrakerGoals")) || [];
  const userGoals = allGoals.filter((g) => g.userId === loggedUser.id);

  if (userGoals.length === 0) {
    lista.innerHTML += "<p>Você ainda não possui metas cadastradas.</p>";
    return;
  }

  userGoals.forEach((g) => {
    const clone = template.cloneNode(true);
    clone.classList.remove("template");
    clone.style.display = "flex";

    const percent = Math.min(100, (g.current / g.total) * 100);

    clone.querySelector(".goal-title").textContent = g.title;
    clone.querySelector(".goal-amount").textContent = `R$ ${formatarValor(
      g.current
    )} de R$ ${formatarValor(g.total)}`;

    clone.querySelector(".progress-bar-fill").style.width = percent + "%";
    clone.querySelector(".progress-percentage").textContent =
      percent.toFixed(1) + "%";

    clone.querySelector(".delete-btn").onclick = () => deleteGoal(g.id);

    lista.appendChild(clone);
  });
}

function formatarValor(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function deleteGoal(goalId) {
  if (confirm("Tem certeza que deseja excluir esta meta?")) {
    const allGoals =
      JSON.parse(localStorage.getItem("financetrakerGoals")) || [];
    const updatedGoals = allGoals.filter((g) => g.id !== goalId);

    localStorage.setItem("financetrakerGoals", JSON.stringify(updatedGoals));

    M.toast({ html: "Meta excluída com sucesso!", classes: "green" });
    carregarMetas();
  }
}

document.addEventListener("DOMContentLoaded", carregarMetas);
