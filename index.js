document.addEventListener("DOMContentLoaded", (event) => {
  let date = new Date();
  document.getElementById("copyright").innerHTML =
    "\u00A9" +
    date.getFullYear().toString() +
    ", Krishna Panthi, All Rights Reserved";

  function goToHome(e) {
    window.location.href = "/";
  }

  let ageEl = document.getElementById('age');
  ageEl.innerText = Math.round((new Date() - new Date('1997-08-25'))/(1000*60*60*24));
});
