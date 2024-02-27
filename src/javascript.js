function updateTime() {
  let vancouverElement = document.querySelector("#vancouver");
  let vancouverDateElement = vancouverElement.querySelector(".date");
  let vancouverTimeElement = vancouverElement.querySelector(".time");

  let vancouverTime = moment().tz("America/Vancouver");

  vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
  vancouverTimeElement.innerHTML = vancouverTime.format(
    "HH:MM:ss [<small>]A[</small>]"
  );

  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");

  let barcelonaTime = moment().tz("Europe/Malta");

  barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
  barcelonaTimeElement.innerHTML = barcelonaTime.format(
    "HH:MM:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
