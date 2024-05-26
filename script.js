let cityname = "tbilisi";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=69cb1102d6848cd3302f153f478f8e94
  `;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
