document.querySelector("#newGoalForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const loggedUser = JSON.parse(
    localStorage.getItem("financetrakerLoggedUser")
  );

  if (!loggedUser) {
    M.toast({ html: "Você precisa estar logado!", classes: "red" });
    setTimeout(() => {
      window.location.href = "./login_page.html";
    }, 1500);
    return;
  }

  const title = document.getElementById("nome").value.trim();
  const totalStr = document.getElementById("valor-total").value;
  const currentStr = document.getElementById("valor-atual").value;
  const monthlyStr = document.getElementById("valor-mensal").value;
  const deadline = document.getElementById("data").value || null;

  const total = parseFloat(totalStr.replace(/\./g, "").replace(",", ".")) || 0;
  const current =
    parseFloat(currentStr.replace(/\./g, "").replace(",", ".")) || 0;
  const monthly =
    parseFloat(monthlyStr.replace(/\./g, "").replace(",", ".")) || 0;

  if (!title) {
    M.toast({ html: "Digite o nome da meta!", classes: "red" });
    return;
  }

  if (total <= 0) {
    M.toast({ html: "O valor total deve ser maior que zero!", classes: "red" });
    return;
  }

  if (current < 0) {
    M.toast({ html: "O valor atual não pode ser negativo!", classes: "red" });
    return;
  }

  if (current > total) {
    M.toast({
      html: "O valor atual não pode ser maior que o total!",
      classes: "red",
    });
    return;
  }

  const newGoal = {
    id: generateUUID(),
    userId: loggedUser.id,
    title: title,
    total: total,
    current: current,
    monthly: monthly,
    deadline: deadline,
    createdAt: new Date().toISOString(),
  };

  const allGoals = JSON.parse(localStorage.getItem("financetrakerGoals")) || [];
  allGoals.push(newGoal);
  localStorage.setItem("financetrakerGoals", JSON.stringify(allGoals));

  const modal = M.Modal.getInstance(document.getElementById("modal1"));
  modal.open();

  setTimeout(() => {
    window.location.href = "./goal_page.html";
  }, 1000);
});

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
