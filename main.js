const bodyWidth = document.body.offsetWidth;

function getMargin(a) {
  return Math.floor(Math.random() * a);
}

function makeSnow() {
  const snow = document.createElement("div");
  snow.setAttribute("id", "snow");
  snow.style.marginLeft = `${getMargin(bodyWidth)}px`;
  document.body.appendChild(snow);
}

for (let i = 0; i < 200; i++) {
  makeSnow();
}
