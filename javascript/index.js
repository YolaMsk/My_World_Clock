function updateCityTime() {
    let losAngelesDateElement = document.querySelector("#los-angeles-date");
    let losAngelesTimeElement = document.querySelector("#los-angeles-time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss A"); 

    let parisDateElement = document.querySelector("#paris-date");
    let parisTimeElement = document.querySelector("#paris-time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss A"); 

    let londonDateElement = document.querySelector("#london-date");
    let londonTimeElement = document.querySelector("#london-time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss A");

    let aucklandDateElement = document.querySelector("#auckland-date");
    let aucklandTimeElement = document.querySelector("#auckland-time");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format("h:mm:ss A");

    let koreaDateElement = document.querySelector("#korea-date");
    let koreaTimeElement = document.querySelector("#korea-time");
    let koreaTime = moment().tz("Asia/Seoul");

    koreaDateElement.innerHTML = koreaTime.format("MMMM Do YYYY");
    koreaTimeElement.innerHTML = koreaTime.format("h:mm:ss A");

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
function toggleMoreCities() {
    let moreCities = document.querySelector("#more-cities");
    let button = document.querySelector("#toggle-button");

    if (moreCities.style.display === "none") {
        moreCities.style.display = "block";
        button.innerHTML = "Hide Cities";
    } else {
        moreCities.style.display = "none";
        button.innerHTML = "More Cities";
    }
}



