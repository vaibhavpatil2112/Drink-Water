const smallcups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightcups(idx));
});

function highlightcups(idx) {
  if (
    smallcups[idx].classList.contains("full") &&
    !smallcups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallcups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  const TotalCups = smallcups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / TotalCups) * 320}px`;
    percentage.innerText = `${(fullCups / TotalCups) * 100}%`;
  }

  if (fullCups === TotalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.innerText = `${2 - (250 * fullCups) / 1000}L Remaning`;
  }
}
//
