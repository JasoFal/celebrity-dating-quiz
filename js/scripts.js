function hideResultsAndError() {
  document.getElementById(`error-message`)
  document.getElementById(`match`).setAttribute(`class`, `hidden`);
  document.getElementById(`dave`).setAttribute(`class`, `hidden`);
  document.getElementById(`funnyRock`).setAttribute(`class`, `hidden`);
  document.getElementById(`crockWithAGlock`).setAttribute(`class`, `hidden`);
  document.getElementById(`sirReginald`).setAttribute(`class`, `hidden`);
  document.getElementById(`not-an-answer`).setAttribute(`class`, `hidden`);
}



window.onload = function () {
  document.querySelector(`form`).onsubmit = function (event) {
    event.preventDefault();
    hideResultsAndError();

    let favIceCream = document.querySelector(`input#favoriteIceCream`).value;
    let favSeason = document.querySelector(`input#favoriteSeason`).value;
    if (favIceCream && favSeason) {
      if (favIceCream === `mint` && favSeason === `winter` || favIceCream === `cheesecake` && favSeason === `summer`) {
        document.getElementById(`match`).removeAttribute(`class`);
        document.getElementById(`dave`).removeAttribute(`class`);
      } else if (favIceCream === `cheesecake` && favSeason === `spring` || favIceCream === `mint` && favSeason === `autumn`) {
        document.getElementById(`match`).removeAttribute(`class`);
        document.getElementById(`funnyRock`).removeAttribute(`class`);
      } else if (favIceCream === `mint` && favSeason === `spring` || favIceCream === `cheesecake` && favSeason === `autumn`) {
        document.getElementById(`match`).removeAttribute(`class`);
        document.getElementById(`crockWithAGlock`).removeAttribute(`class`);
      } else if (favIceCream === `cheesecake` && favSeason === `winter` || favIceCream === `mint` && favSeason === `summer`) {
        document.getElementById(`match`).removeAttribute(`class`);
        document.getElementById(`sirReginald`).removeAttribute(`class`);
      } else {
        document.getElementById(`not-an-answer`).removeAttribute(`class`);
      }
    } else {
      document.getElementById(`error-message`).removeAttribute(`class`);
    }
    };
  };