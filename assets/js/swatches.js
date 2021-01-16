const colorSwatchButtons = document.querySelectorAll("button");
const activeColor = `rgb(104, 134, 227)`;
let activeClasses = [];
document.querySelector(`.color-swatch-button-pokemon`).style.backgroundColor = activeColor;

colorSwatchButtons.forEach(btn => {
  btn.addEventListener("click", toggleButtons);
});

function toggleButtons(ev) {
  const isActive = ev.target.style.backgroundColor === activeColor;
  const specificButtonClass = ev.target.classList[0];
  const classForSwatch = specificButtonClass.split("color-swatch-button-")[1];
  if (classForSwatch === `pokemon`) {
    colorSwatchButtons.forEach(btn => btn.style.backgroundColor = ``);
    ev.target.style.backgroundColor = activeColor;
    activeClasses = [];
  } else if (isActive) {
    // remove class
    ev.target.style.backgroundColor = ``;
    activeClasses = activeClasses.filter(activeClass => activeClass !== classForSwatch);
  } else {
    // activate class
    ev.target.style.backgroundColor = activeColor;
    activeClasses.push(classForSwatch);
  }

  const allSwatches = document.querySelectorAll(".swatch");
  if (activeClasses.length === 0) {
    // show them all
    allSwatches.forEach(swatch => swatch.style.display = `block`);

  } else {
    document.querySelector(`.color-swatch-button-pokemon`).style.backgroundColor = ``;
    allSwatches.forEach(swatch => {
      let setActive = false;
      activeClasses.forEach(activeClass => {
        if (swatch.classList.contains(activeClass)) {
          setActive = true;
        }
      });
      swatch.style.display = setActive ? `block` : `none`;
    });
  }
}
