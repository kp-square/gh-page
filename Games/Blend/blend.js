let selectedColors = {
  "rgb(255, 0, 0)": 0, // Red
  "rgb(0, 255, 0)": 0, // Green
  "rgb(0, 0, 255)": 0, // Blue
  "rgb(255, 255, 0)": 0, // Yellow
  "rgb(0, 255, 255)": 0, // Cyan
  "rgb(255, 0, 255)": 0, // Magenta
  "rgb(0, 0, 0)": 0, // White
  "rgb(255, 255, 255)": 0, // Black
  "rgb(128, 128, 128)": 0, // Gray
  "rgb(255, 165, 0)": 0, // Orange
};

var targetColor = "rgb(128, 169, 128)";

let count = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  const colors = [
    "rgb(255, 0, 0)", // Red
    "rgb(0, 255, 0)", // Green
    "rgb(0, 0, 255)", // Blue
    "rgb(255, 255, 0)", // Yellow
    "rgb(0, 255, 255)", // Cyan
    "rgb(255, 0, 255)", // Magenta
    "rgb(0, 0, 0)", // White
    "rgb(255, 255, 255)", // Black
    "rgb(128, 128, 128)", // Gray
    "rgb(255, 165, 0)", // Orange
  ];

  var targetEl = document.getElementById("target");
  if (targetEl) {
    targetEl.style.backgroundColor = targetColor;
  }

  colors.forEach((color, index) => {
    const div = document.getElementById(`color-${index + 1}`);
    if (div) {
      div.style.backgroundColor = color;
      if (
        color === "rgb(0, 0, 0)" ||
        color === "rgb(0, 0, 255)" ||
        color === "rgb(128, 128, 128)"
      ) {
        div.style.color = "#FFFFFF"; // Change text color to white for better contrast
      }
    }
  });

  const colorRemoveBlocks = document.getElementsByClassName("remove-color");

  Array.from(colorRemoveBlocks).forEach((block) => {
    block.addEventListener("click", function () {
      let parent = block.parentElement;
      let colorEl = parent.getElementsByClassName("select-color")[0];
      let colorToBeRemoved = getComputedStyle(colorEl).backgroundColor;
      if (selectedColors[colorToBeRemoved]) {
        selectedColors[colorToBeRemoved] -= 1;
        updateColor();
        updatePercentage();
      }
    });
  });

  const colorBlocks = document.getElementsByClassName("select-color");

  Array.from(colorBlocks).forEach((block) => {
    block.addEventListener("click", function () {
      block.innerText = "33%";

      let selectedColor = getComputedStyle(this).backgroundColor;
      if (selectedColor in selectedColors) {
        selectedColors[selectedColor] += 1;
      }

      this.classList.add("clicked");

      setTimeout(() => {
        this.classList.remove("clicked");
      }, 300); // The timeout duration should match the animation duration

      updateColor();
      count++;
      setCount();
      updatePercentage();

      setTimeout(() => seeIfGameIsDone(), 400);
      
    });
  });

  let resetBtn = document.getElementById("reset");

  resetBtn.onclick = function () {
    resetYourColor();
    resetColors();
    count = 0;
    setCount();
    updatePercentage();
  };

  setCount();

  function seeIfGameIsDone(){
    if (checkIfColorsMatched()) {
      let x = alert("Congrats! You won.");
      console.log("you won! --> ", x);
    } else if (count === 10) {
      alert("You Lost!");
      return;
    }
  }

  function averageRGBColors(colors) {
    let totalR = 0,
      totalG = 0,
      totalB = 0;
    var len = 0;

    for (let color in colors) {
      let val = colors[color];
      len += val;
      const rgb = color.match(/\d+/g).map(Number);
      totalR += rgb[0] * val;
      totalG += rgb[1] * val;
      totalB += rgb[2] * val;
    }

    if (len === 0) {
      resetYourColor();
      return "";
    }

    const avgR = Math.round(totalR / len);
    const avgG = Math.round(totalG / len);
    const avgB = Math.round(totalB / len);

    return `rgb(${avgR}, ${avgG}, ${avgB})`;
  }

  function resetYourColor() {
    const body = document.getElementsByTagName("body");
    var resetColor = getComputedStyle(body[0]).backgroundColor;
    const elem = document.getElementById("your-color");
    if (elem) {
      elem.style.backgroundColor = resetColor;
    }
  }

  function resetColors() {
    selectedColors = {
      "rgb(255, 0, 0)": 0, // Red
      "rgb(0, 255, 0)": 0, // Green
      "rgb(0, 0, 255)": 0, // Blue
      "rgb(255, 255, 0)": 0, // Yellow
      "rgb(0, 255, 255)": 0, // Cyan
      "rgb(255, 0, 255)": 0, // Magenta
      "rgb(0, 0, 0)": 0, // White
      "rgb(255, 255, 255)": 0, // Black
      "rgb(128, 128, 128)": 0, // Gray
      "rgb(255, 165, 0)": 0, // Orange
    };
  }

  function setCount() {
    const countEl = document.getElementById("count");
    countEl.innerText = count;
  }

  function updateColor() {
    const elem = document.getElementById("your-color");
    if (elem) {
      let avgColor = averageRGBColors(selectedColors);
      if (avgColor) {
        elem.style.backgroundColor = avgColor;
      }
    }
  }

  function updatePercentage() {
    const colorBlocks = document.getElementsByClassName("select-color");
    var totalColors = 0;
    for (let color in selectedColors) {
      totalColors += selectedColors[color];
    }
    Array.from(colorBlocks).forEach((block) => {
      let selectedColor = getComputedStyle(block).backgroundColor;
      let val = Math.round(100 * (selectedColors[selectedColor] / totalColors));
      if (val) {
        block.innerText = `${val}%`;
      } else {
        block.innerText = "";
      }
    });
  }

  function checkIfColorsMatched() {
    var finalColor = averageRGBColors(selectedColors);
    if (finalColor == targetColor) {
      return true;
    }
    return false;
  }
});
