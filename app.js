function cliqueiNoBotao() {
    let city = document.querySelector(".input-city").value;
  
    searchCity(city);
  }
  
  async function searchCity(city) {
    let dice = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        keys +
        "&lang=pt_br" +
        "&units=metric"
    ).then((answer) => answer.json());
  
    trocarTela(dice);
  }
  
  let keys = "cebcd482eda57fa9a6714c1c2ba91885";
  
  function trocarTela(dice) {
    console.log(dice);
    document.querySelector(".city").innerHTML = "Tempo em " + dice.name;
    document.querySelector(".temp").innerHTML = Math.floor(dice.main.temp) + "°C";
    document.querySelector(".climate").innerHTML = dice.weather[0].description;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + dice.weather[0].icon + ".png";
    document.querySelector(".humidity").innerHTML =
      "Umidade: " + Math.floor(dice.main.humidity) + "%";
  }
  