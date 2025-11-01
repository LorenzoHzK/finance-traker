function loadHeader() {
  fetch("../pages/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems);
    })
    .catch((error) => console.error("Erro ao carregar header:", error));
}

document.addEventListener("DOMContentLoaded", loadHeader);
