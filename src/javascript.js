function updateTime() {
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format(
      "HH:MM:ss [<small>]A[</small>]"
    );
  }
  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    let dubaiTime = moment().tz("Asia/Dubai");

    dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
    dubaiTimeElement.innerHTML = dubaiTime.format(
      "HH:MM:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimezone);
  let cityName = cityTimezone.replace("-", " ").split("/")[1];
  let cities = document.querySelector("#city");
  cities.innerHTML = `<div class="city first" id="vancouver">
          <div>
            <h3>${cityName}</h3>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:MM:ss [<small>]A[</small>]"
          )}></div>
         <div>
          <a href=index.html">All cities</a>
          </div>`;
}

setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#country");
citySelectElement.addEventListener("change", updateCity);
