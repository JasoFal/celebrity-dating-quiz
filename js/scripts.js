function hideResultsAndError() {
  error();
  document.getElementById(`match`).setAttribute(`class`, `hidden`);
  document.getElementById(`dave`).setAttribute(`class`, `hidden`);
  document.getElementById(`funnyRock`).setAttribute(`class`, `hidden`);
  document.getElementById(`crockWithAGlock`).setAttribute(`class`, `hidden`);
  document.getElementById(`sirReginald`).setAttribute(`class`, `hidden`);
  document.getElementById(`not-an-answer`).setAttribute(`class`, `hidden`);
  document.getElementById(`resetButton`).setAttribute(`class`, `hidden`);
}

function error() {
  document.getElementById(`error-message`)
}

function hideFormInfo() {
  document.getElementById(`hideUserInfo`).setAttribute(`class`, `hidden`);
}

window.addEventListener(`load`, function () {
  let form = document.querySelector(`form`);
  form.addEventListener(`submit`, function (event) {
    event.preventDefault();
    hideResultsAndError();
  
  let favIceCream = document.querySelector(`input#favoriteIceCream`).value;
  let favSeason = document.querySelector(`input#favoriteSeason`).value;
  if (favIceCream && favSeason) {
    if (favIceCream === `mint` && favSeason === `winter` || favIceCream === `cheesecake` && favSeason === `summer`) {
      document.getElementById(`match`).classList.remove(`hidden`);
      document.getElementById(`dave`).classList.remove(`hidden`);
      document.getElementById(`resetButton`).classList.remove(`hidden`);
    } else if (favIceCream === `cheesecake` && favSeason === `spring` || favIceCream === `mint` && favSeason === `autumn`) {
      document.getElementById(`match`).classList.remove(`hidden`);
      document.getElementById(`funnyRock`).classList.remove(`hidden`);
      document.getElementById(`resetButton`).classList.remove(`hidden`);
    } else if (favIceCream === `mint` && favSeason === `spring` || favIceCream === `cheesecake` && favSeason === `autumn`) {
      document.getElementById(`match`).classList.remove(`hidden`);
      document.getElementById(`crockWithAGlock`).classList.remove(`hidden`);
      document.getElementById(`resetButton`).classList.remove(`hidden`);
    } else if (favIceCream === `cheesecake` && favSeason === `winter` || favIceCream === `mint` && favSeason === `summer`) {
      document.getElementById(`match`).classList.remove(`hidden`);
      document.getElementById(`sirReginald`).classList.remove(`hidden`);
      document.getElementById(`resetButton`).classList.remove(`hidden`);
    } else {
      document.getElementById(`not-an-answer`).classList.remove(`hidden`);
      document.getElementById(`resetButton`).classList.remove(`hidden`);
    }
  } else {
    document.getElementById(`error-message`).classList.remove(`hidden`);
    document.getElementById(`resetButton`).classList.remove(`hidden`);
  }
  let reset = document.getElementById(`resetButton`)
  reset.addEventListener(`submit`, function() {
    hideResultsAndError();
    hideFormInfo().classList.remove(`hidden`);
  });
  hideFormInfo();
  });
});