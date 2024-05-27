const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#btn");
const temp = document.querySelector("#temp");
const city = document.querySelector("#city");
const time = document.querySelector("#time");
const weatherTxt = document.querySelector("#weather");
const tempMax = document.querySelector("#tempMax");
const tempMin = document.querySelector("#tempMin");
const humadity = document.querySelector("#humadity");
const cloudy = document.querySelector("#cloudy");
const wind = document.querySelector("#wind");
searchBtn.addEventListener("click", function () {
  if (searchInput.value.trim() !== "") {
    let cityname = searchInput.value.trim();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=69cb1102d6848cd3302f153f478f8e94
  `;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        temp.textContent = data.main.temp;
        city.textContent = data.name;
        let cdate = new Date();
        time.textContent = cdate.toDateString();
        weatherTxt.textContent = data.weather[0].description;
        tempMax.textContent = data.main.temp_max;
        tempMin.textContent = data.main.temp_min;
        humadity.textContent = `${data.main.humidity}%`;
        cloudy.textContent = `${data.clouds.all}%`;
        wind.textContent = `${data.wind.speed}km/h`;
        console.log(data);
      });
  } else {
  }
});
