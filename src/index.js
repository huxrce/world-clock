function updateTime() {
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    let romeTime = moment().tz("Europe/Rome");

    romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
    romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let shanghaiElement = document.querySelector("#shanghai");
  if (shanghaiElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTime = moment().tz("Asia/Shanghai");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let hawaiiElement = document.querySelector("#hawaii");
  if (hawaiiElement) {
    let hawaiiDateElement = hawaiiElement.querySelector(".date");
    let hawaiiTimeElement = hawaiiElement.querySelector(".time");
    let hawaiiTime = moment().tz("US/Hawaii");

    hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM Do YYYY");
    hawaiiTimeElement.innerHTML = hawaiiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
      </div>
    </div>
    <button onclick="location.href='index.html'">Homepage</button>
  `;

  setTimeout(function () {
    updateCity(event);
  }, 1000);
}

setInterval(updateTime, 1000);

let selectCitiesElement = document.querySelector("#city");
selectCitiesElement.addEventListener("change", updateCity);
