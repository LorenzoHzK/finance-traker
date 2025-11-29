let dashboardCarregado = false;

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(inicializarDashboard);

function inicializarDashboard() {
  console.log("Inicializando dashboard...");

  const loggedUser = JSON.parse(
    localStorage.getItem("financetrakerLoggedUser")
  );

  console.log("Usuário logado:", loggedUser);

  if (!loggedUser) {
    console.log("Usuário não logado, redirecionando...");
    alert("Você precisa fazer login!");
    window.location.href = "./pages/login_page.html";
    return;
  }

  const allGoals = JSON.parse(localStorage.getItem("financetrakerGoals")) || [];
  const userGoals = allGoals.filter((g) => g.userId === loggedUser.id);

  console.log("Total de metas no sistema:", allGoals.length);
  console.log("Metas do usuário:", userGoals.length);
  console.log("Metas do usuário:", userGoals);

  calcularEstatisticas(userGoals);

  desenharGrafico(userGoals);

  dashboardCarregado = true;
  console.log("Dashboard carregado com sucesso!");
}

function calcularEstatisticas(goals) {
  console.log("Calculando estatísticas para", goals.length, "metas");

  let metasAtingidas = 0;
  let metasAndamento = 0;
  let totalEconomizado = 0;
  let totalGeral = 0;
  let progressoTotal = 0;

  goals.forEach((goal) => {
    const progresso = (goal.current / goal.total) * 100;

    if (progresso >= 100) {
      metasAtingidas++;
    } else {
      metasAndamento++;
    }

    totalEconomizado += goal.current;
    totalGeral += goal.total;
  });

  if (totalGeral > 0) {
    progressoTotal = (totalEconomizado / totalGeral) * 100;
  }

  console.log("Estatísticas calculadas:");
  console.log("- Metas atingidas:", metasAtingidas);
  console.log("- Metas em andamento:", metasAndamento);
  console.log("- Total economizado:", totalEconomizado);
  console.log("- Progresso total:", progressoTotal);

  const metasAtingidasEl = document.getElementById("metasAtingidas");
  const metasAndamentoEl = document.getElementById("metasAndamento");
  const totalEconomizadoEl = document.getElementById("totalEconomizado");
  const progressoGeralEl = document.getElementById("progressoGeral");
  const progressoAnoEl = document.getElementById("progressoAno");

  if (metasAtingidasEl) metasAtingidasEl.textContent = metasAtingidas;
  if (metasAndamentoEl) metasAndamentoEl.textContent = metasAndamento;
  if (totalEconomizadoEl)
    totalEconomizadoEl.textContent = `R$ ${formatarValor(totalEconomizado)}`;
  if (progressoGeralEl)
    progressoGeralEl.textContent = `${progressoTotal.toFixed(0)}%`;
  if (progressoAnoEl)
    progressoAnoEl.textContent = `Este Ano +${progressoTotal.toFixed(0)}%`;
}

function desenharGrafico(goals) {
  console.log("Desenhando gráfico para", goals.length, "metas");

  if (goals.length === 0) {
    console.log("Nenhuma meta encontrada, mostrando gráfico vazio");
    const data = google.visualization.arrayToDataTable([
      ["Mês", "Progresso %"],
      ["Jan", 0],
      ["Fev", 0],
      ["Mar", 0],
      ["Abr", 0],
      ["Mai", 0],
      ["Jun", 0],
      ["Jul", 0],
      ["Ago", 0],
      ["Set", 0],
      ["Out", 0],
      ["Nov", 0],
      ["Dez", 0],
    ]);

    desenharGraficoGoogle(data);
    return;
  }

  const progressoMensal = calcularProgressoMensal(goals);

  console.log("Progresso mensal calculado:", progressoMensal);

  const data = google.visualization.arrayToDataTable([
    ["Mês", "Progresso %"],
    ["Jan", progressoMensal[0]],
    ["Fev", progressoMensal[1]],
    ["Mar", progressoMensal[2]],
    ["Abr", progressoMensal[3]],
    ["Mai", progressoMensal[4]],
    ["Jun", progressoMensal[5]],
    ["Jul", progressoMensal[6]],
    ["Ago", progressoMensal[7]],
    ["Set", progressoMensal[8]],
    ["Out", progressoMensal[9]],
    ["Nov", progressoMensal[10]],
    ["Dez", progressoMensal[11]],
  ]);

  desenharGraficoGoogle(data);
}

function calcularProgressoMensal(goals) {
  const mesAtual = new Date().getMonth(); // 0-11 (Novembro = 10)
  const progressoMensal = new Array(12).fill(0);

  console.log("Mês atual:", mesAtual, "(0=Jan, 10=Nov)");

  goals.forEach((goal, index) => {
    console.log(`Processando meta ${index + 1}:`, goal.title);

    const dataCriacao = new Date(goal.createdAt);
    const mesCriacao = dataCriacao.getMonth();

    console.log("- Mês de criação:", mesCriacao);
    console.log(
      "- Progresso atual:",
      ((goal.current / goal.total) * 100).toFixed(2) + "%"
    );

    const progressoAtual = (goal.current / goal.total) * 100;

    if (goal.monthly > 0 && goal.total > 0) {
      const progressoPorMes = (goal.monthly / goal.total) * 100;

      console.log("- Progresso por mês:", progressoPorMes.toFixed(2) + "%");

      for (let i = 0; i <= mesAtual; i++) {
        if (i >= mesCriacao) {
          const mesesDecorridos = i - mesCriacao;
          const progressoNoMes = Math.min(
            progressoAtual,
            progressoPorMes * (mesesDecorridos + 1)
          );
          progressoMensal[i] += progressoNoMes;
        }
      }
    } else {
      console.log("- Sem valor mensal, distribuindo progresso atual");
      const mesesDecorridos = mesAtual - mesCriacao + 1;
      for (let i = mesCriacao; i <= mesAtual; i++) {
        progressoMensal[i] += progressoAtual / mesesDecorridos;
      }
    }
  });

  if (goals.length > 0) {
    progressoMensal.forEach((valor, index) => {
      progressoMensal[index] = Math.min(100, valor / goals.length);
    });
  }

  return progressoMensal.map((v) => Math.round(v));
}

function desenharGraficoGoogle(data) {
  console.log("Renderizando gráfico no elemento chart_div");

  const chartDiv = document.getElementById("chart_div");

  if (!chartDiv) {
    console.error("ERRO: Elemento chart_div não encontrado!");
    return;
  }

  const options = {
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#4CAF50"],
    backgroundColor: "#f9f9f9",
    chartArea: { width: "85%", height: "70%" },
    vAxis: {
      minValue: 0,
      maxValue: 100,
      format: "#'%'",
    },
    hAxis: {
      textStyle: { fontSize: 12 },
    },
  };

  const chart = new google.visualization.LineChart(chartDiv);

  chart.draw(data, options);
  console.log("Gráfico renderizado com sucesso!");
}

function formatarValor(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

console.log("overviewPage.js carregado!");
console.log("localStorage disponível:", typeof Storage !== "undefined");
console.log("Google Charts disponível:", typeof google !== "undefined");
