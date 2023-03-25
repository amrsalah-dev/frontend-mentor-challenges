let ratingValue = "";
function getRating() {
  ratingValue = document.querySelector('input[name="rating"]:checked').value;
  return ratingValue;
}

const showResults = document.querySelector(".thankYouCard");
const hideRatings = document.querySelector(".ratingCard");
const formSubmit = document.getElementById("ratingForm");
const ratingString = document.getElementById("ratingResult");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  ratingString.textContent = `You selected ${getRating()} out of 5`;
  showResults.style.display = "flex";
  hideRatings.style.display = "none";
});
