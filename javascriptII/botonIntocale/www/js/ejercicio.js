const button = document.querySelector("#button");
const hint = document.querySelector("#hint");
button.setAttribute("data-Y", `${window.innerHeight / 2 - 50}`);
button.setAttribute("data-X", `${window.innerWidth / 2 - 50}`);

function repositionButton() {
  button.style.top = `${button.getAttribute("data-Y")}px`;
  button.style.left = `${button.getAttribute("data-X")}px`;
}

repositionButton();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomPosition(axis) {
  let max = 0;
  switch (axis) {
    case "Y":
      max = window.innerHeight - 100;
      break;

    case "X":
      max = window.innerWidth - 100;
      break;
  }
  let number = getRandomInt(max);
  let current = Number(button.getAttribute(`data-${axis}`));
  //  console.log(`current ${axis}: ${current}, number: ${number}`);
  if (number >= current - 100 && number <= current + 100) {
    //    console.log("repeat");
    number = getRandomPosition(axis);
  }
  return number;
}

const handleMouseOver = event => {
  if (!event.ctrlKey) {
    button.setAttribute("data-Y", `${getRandomPosition("Y")}`);
    button.setAttribute("data-X", `${getRandomPosition("X")}`);
    /*     console.log(
      `Y: ${button.getAttribute("data-Y")}, X: ${button.getAttribute("data-X")}`
    ); */
    repositionButton();
  }
};

const handleMouseClick = () => {
  alert("¡Lo conseguiste!");
};

button.addEventListener("mouseover", handleMouseOver);
button.addEventListener("click", handleMouseClick);

setTimeout(() => {
  hint.style.visibility = "visible";
}, 5000);

const handleHintClick = () => {
  hint.textContent = "Prueba a mantener pulsada la tecla control...";
};

hint.addEventListener("click", handleHintClick);
