
  function updateCityTime() {
   
    let losAngelesDateElement = document.querySelector("#los-angeles-date");
    let losAngelesTimeElement = document.querySelector("#los-angeles-time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("DD MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss A");

    let parisDateElement = document.querySelector("#paris-date");
    let parisTimeElement = document.querySelector("#paris-time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("DD MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format("hh:mm:ss A");
  }
  setInterval(updateCityTime, 1000);