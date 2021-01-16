trackPageView("Swatches");

const colorSwatchButtons = document.querySelectorAll(".csb");
const activeColor = `rgb(104, 134, 227)`;
let activeRule = `or`;
let activeClasses = [];
document.querySelector(`.color-swatch-button-pokemon`).style.backgroundColor = activeColor;
document.querySelector(`.color-swatch-button-rule-or`).style.backgroundColor = activeColor;

colorSwatchButtons.forEach(btn => {
  btn.addEventListener("click", toggleButtons);
});

document.querySelector(`.color-swatch-scroll-up`)
  .addEventListener("click", function () {window.scrollTo(0, 0)});

function toggleButtons(ev) {
  const isActive = ev.target.style.backgroundColor === activeColor;
  // class list here is [csb, color-swatch-button-X]
  const specificButtonClass = ev.target.classList[1];
  const classForSwatch = specificButtonClass.split("color-swatch-button-")[1];
  let category;
  let specificClassForSwatch;
  const splitClass = classForSwatch.split("-");
  if (splitClass.length > 1) {
    category = splitClass[0];
    specificClassForSwatch = splitClass[1];
  }
  if (classForSwatch === `pokemon`) {
    colorSwatchButtons.forEach(btn => btn.style.backgroundColor = ``);
    ev.target.style.backgroundColor = activeColor;
    activeClasses = [];
  } else if (specificClassForSwatch === `and` || specificClassForSwatch === `or`) {
    setAndOrButtonColors(specificClassForSwatch);
    activeRule = specificClassForSwatch;
  } else if (isActive) {
    // remove class
    ev.target.style.backgroundColor = ``;
    activeClasses = activeClasses.filter(activeClass => activeClass !== specificClassForSwatch);
  } else {
    if (activeRule === `and`) {
      // remove the other category if applicable
      if (category === `gen`) {
        activeClasses = activeClasses.filter(activeClass => !activeClass.includes("gen"));
        colorSwatchButtons.forEach(btn => {
          if (btn.classList[0].includes("gen")) {
            btn.style.backgroundColor = ``;
          }
        });
      } else if (category === `category`) {
        // lazy way, better to use the category group
        activeClasses = activeClasses.filter(activeClass => (
          activeClass !== "starter" &&
          activeClass !== "legendary" &&
          activeClass !== "mythical" &&
          activeClass !== "eeveelution" &&
          activeClass !== "baby"
        ));
        colorSwatchButtons.forEach(btn => {
          if (btn.classList[0].includes("category")) {
            btn.style.backgroundColor = ``;
          }
        });
      }
    }
    // activate class
    ev.target.style.backgroundColor = activeColor;
    activeClasses.push(specificClassForSwatch);
  }

  const allSwatches = document.querySelectorAll(".swatch");
  if (activeClasses.length === 0) {
    // show them all
    allSwatches.forEach(swatch => swatch.style.display = `block`);
    setAndOrButtonColors(activeRule);

  } else {
    document.querySelector(`.color-swatch-button-pokemon`).style.backgroundColor = ``;
    allSwatches.forEach(swatch => {
      let setActive;
      if (activeRule === `or`) {
        setActive = false;
        activeClasses.forEach(activeClass => {
          if (swatch.classList.contains(activeClass)) {
            setActive = true;
          }
        });
      } else {
        setActive = true;
        activeClasses.forEach(activeClass => {
          if (!swatch.classList.contains(activeClass)) {
            setActive = false;
          }
        });
      }

      swatch.style.display = setActive ? `block` : `none`;
    });
  }
}

function setAndOrButtonColors(activeRule) {
  const isAndRule = activeRule === `and`;
  document.querySelector(`.color-swatch-button-rule-and`).style.backgroundColor = isAndRule ? activeColor : ``;
  document.querySelector(`.color-swatch-button-rule-or`).style.backgroundColor = isAndRule ? `` : activeColor;
}
