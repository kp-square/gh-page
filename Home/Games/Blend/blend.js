let selectedColors = [];
let count = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
    "#000000",
    "#FFFFFF",
    "#808080",
    "#FFA500",
  ];
  colors.forEach((color, index) => {
    const div = document.getElementById(`color-${index + 1}`);
    if (div) {
      div.style.backgroundColor = color;
      if (color === "#000000" || color === "#0000FF" || color === "#808080") {
        div.style.color = "#FFFFFF"; // Change text color to white for better contrast
      }
    }
  });

  const colorBlocks = document.getElementsByClassName("select-color");
  Array.from(colorBlocks).forEach((block) => {
    block.addEventListener("click", function () {
        if(count === 10){
            alert("You Lost!")
            return;
        }
      let selectedColor = getComputedStyle(this).backgroundColor;
      selectedColors.push(selectedColor);

      console.log(`Background color: ${selectedColor}`);
      this.classList.add("clicked");

      setTimeout(() => {
        this.classList.remove("clicked");
      }, 300); // The timeout duration should match the animation duration

      const elem = document.getElementById("your-color");
      if (elem) {
        elem.style.backgroundColor = averageRGBColors(selectedColors);
      }
      count++;

      const countEl = document.getElementById("count");
      countEl.innerText = count;
    });
  });

  function averageRGBColors(colors) {
    let totalR = 0,
      totalG = 0,
      totalB = 0;

    colors.forEach((color) => {
      const rgb = color.match(/\d+/g).map(Number);
      totalR += rgb[0];
      totalG += rgb[1];
      totalB += rgb[2];
    });

    const avgR = Math.round(totalR / colors.length);
    const avgG = Math.round(totalG / colors.length);
    const avgB = Math.round(totalB / colors.length);

    return `rgb(${avgR}, ${avgG}, ${avgB})`;
  }

  let resetBtn = document.getElementById("reset");
  resetBtn.onclick = function () {
    selectedColors = [];
    const body = document.getElementsByTagName("body");
    var resetColor = getComputedStyle(body[0]).backgroundColor;
    const elem = document.getElementById("your-color");
    if (elem) {
      elem.style.backgroundColor = resetColor;
    }

    count = 0;
    const countEl = document.getElementById("count");
    countEl.innerText = count;
  };

  const countEl = document.getElementById("count");
  countEl.innerText = count;
});
