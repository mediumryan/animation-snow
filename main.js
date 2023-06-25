$(function () {
  const bodyWidth = $("body").width();

  function getMargin(a) {
    return Math.floor(Math.random() * a);
  }

  function makeSnow() {
    const snow = $("<div>").attr("id", "snow");
    snow.css("margin-left", `${getMargin(bodyWidth)}px`);
    $("body").append(snow);
  }

  for (let i = 0; i < 200; i++) {
    makeSnow();
  }
});
