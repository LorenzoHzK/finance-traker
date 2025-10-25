document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {
    dismissible: true,
    onOpenEnd: function () {
      setTimeout(function () {
        instances[0].close();
      }, 1000);

      setTimeout(function () {
        window.location.href =
          "http://127.0.0.1:5500/assets/pages/goal_page.html";
      }, 2000);
    },
  });
});
