fetch(
  "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,BTC-BRL"
)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("usd-value").textContent = `R$ ${Number(
      data.USDBRL.high
    ).toFixed(2)}`;
    document.getElementById("eur-value").textContent = `R$ ${Number(
      data.EURBRL.high
    ).toFixed(2)}`;
    document.getElementById("gbp-value").textContent = `R$ ${Number(
      data.GBPBRL.high
    ).toFixed(2)}`;
    document.getElementById("ars-value").textContent = `R$ ${Number(
      data.ARSBRL.high
    ).toFixed(2)}`;
    document.getElementById("btc-value").textContent = `R$ ${Number(
      data.BTCBRL.high
    ).toFixed(2)}`;
  })
  .catch(() => {
    document.getElementById("usd-value").textContent = "Erro ao carregar";
    document.getElementById("eur-value").textContent = "Erro ao carregar";
    document.getElementById("gbp-value").textContent = "Erro ao carregar";
    document.getElementById("ars-value").textContent = "Erro ao carregar";
    document.getElementById("btc-value").textContent = "Erro ao carregar";
  });
