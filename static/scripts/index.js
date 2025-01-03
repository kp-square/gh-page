document.addEventListener("DOMContentLoaded", (event) => {

  function setCopyright() {
    let date = new Date();
    document.getElementById("copyright").innerHTML =
      "\u00A9" +
      date.getFullYear().toString() +
      ", Krishna Panthi, All Rights Reserved";
  }

  function goToHome(e) {
    window.location.href = "/";
  }

  function setAge() {
    let ageEl = document.getElementById("age");
    ageEl.innerText = Math.floor(
      (new Date() - new Date("1997-08-25")) / (1000 * 60 * 60 * 24)
    );
  }
  
  function changeTheme() {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setDarkTheme();
    } else {
      setWhiteTheme();
    }
  }
  changeTheme();
});

function setTheme() {
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    localStorage.setItem("theme", "dark");
    setDarkTheme();
  } else {
    localStorage.setItem("theme", "light");
    setWhiteTheme();
  }
}

function setWhiteTheme() {
  document.documentElement.style.setProperty("--bg-color", '#ffffff');
  document.documentElement.style.setProperty("--text-color", '#121212');
  document.documentElement.style.setProperty("--accent-color", '#121212');
  document.documentElement.style.setProperty("--card-bg", '#ffffff');

  var divsToHide = document.getElementsByClassName("dark-mode"); 
  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = "none";
  }

  var divsToHide = document.getElementsByClassName("light-mode");
  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = "unset";
  }

  colorTransition();
}

function setDarkTheme() {
  document.documentElement.style.setProperty("--bg-color", '#121212');
  document.documentElement.style.setProperty("--text-color", '#e0e0ff');
  document.documentElement.style.setProperty("--accent-color", '#00ffdd');
  document.documentElement.style.setProperty("--card-bg", 'rgba(255, 255, 255, 0.05)');

  var divsToHide = document.getElementsByClassName("light-mode");
  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = "none";
  }

  var divsToHide = document.getElementsByClassName("dark-mode");
  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = "unset";
  }
  colorTransition();
}

function createStars() {
  const starfield = document.getElementById("starfield");
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = `${Math.random() * 2}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 1}s`;
    starfield.appendChild(star);
  }
}

function colorTransition() {
  // Function to convert hex to RGB
  function hexToRgb(hex) {
    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
    };
  }

  // Function to convert RGB to hex
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // Get the initial color from CSS property
  let color = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent-color")
    .trim();
  let { r, g, b } = hexToRgb(color);

  function updateColor() {
    if (r === 255 && g === 0 && b < 255) {
      b += 1;
    } else if (r > 0 && g === 0 && b === 255) {
      r -= 1;
    } else if (r === 0 && g < 255 && b === 255) {
      g += 1;
    } else if (r === 0 && g === 255 && b > 0) {
      b -= 1;
    } else if (r < 255 && g === 255 && b === 0) {
      r += 1;
    } else if (r === 255 && g > 0 && b === 0) {
      g -= 1;
    }
    
      function getRandomInt(max) {
          return Math.floor(Math.random() * max);
      }

      function getColor() {
          allcolors = ["#FF6F61", "#4b91d6", "#FF007F", "#e42d63", "#bb16ae"];
          let num = getRandomInt(100) % 6
          return allcolors[num]
      }

    
    document.documentElement.style.setProperty("--accent-color", getColor());

    // Schedule the next update
    // requestAnimationFrame(updateColor);
  }

  // Start the color transition
  updateColor();
}

colorTransition();

createStars();
