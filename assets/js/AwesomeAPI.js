fetch(
  "https://economia.awesomeapi.com.br/json/last/" +
    "USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,BTC-BRL," +
    "JPY-BRL,CAD-BRL,CHF-BRL,CNY-BRL,AUD-BRL,NZD-BRL"
)
  .then((res) => res.json())
  .then((data) => {
    function setValue(id, key) {
      document.getElementById(id).textContent = `R$ ${Number(
        data[key].high
      ).toFixed(2)}`;
    }

    setValue("usd-value", "USDBRL");
    setValue("eur-value", "EURBRL");
    setValue("gbp-value", "GBPBRL");
    setValue("ars-value", "ARSBRL");
    setValue("btc-value", "BTCBRL");

    setValue("jpy-value", "JPYBRL");
    setValue("cad-value", "CADBRL");
    setValue("chf-value", "CHFBRL");
    setValue("cny-value", "CNYBRL");
    setValue("aud-value", "AUDBRL");
    setValue("nzd-value", "NZDBRL");
  })
  .catch(() => {
    const allIds = [
      "usd-value",
      "eur-value",
      "gbp-value",
      "ars-value",
      "btc-value",
      "jpy-value",
      "cad-value",
      "chf-value",
      "cny-value",
      "aud-value",
      "nzd-value",
    ];

    allIds.forEach((id) => {
      document.getElementById(id).textContent = "Erro ao carregar";
    });
  });
