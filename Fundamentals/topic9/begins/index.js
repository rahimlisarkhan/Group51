$(document).ready(function () {
  $(document).on("click", "#change", function () {
    let box = $("div");

    box.animate({ left: "+=20px" });
  });


  $(document).on("click", "#hidse", function () {
    let box = $("div");

    box.hide(2000);
  });
});
