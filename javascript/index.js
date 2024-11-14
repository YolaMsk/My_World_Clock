function updateCityTime() {
    let losAngelesDateElement = document.querySelector("#los-angeles-date");
    let losAngelesTimeElement = document.querySelector("#los-angeles-time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("DD MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss A");

    let parisDateElement = document.querySelector("#paris-date");
    let parisTimeElement = document.querySelector("#paris-time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("DD MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss A");

    let sydneyDateElement = document.querySelector("#sydney-date");
    let sydneyTimeElement = document.querySelector("#sydney-time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("DD MMMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss A");
}

setInterval(updateCityTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.split("/")[1].replace("_", " ");
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city">
          <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("DD MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss A")}</div>
      </div>
    `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
