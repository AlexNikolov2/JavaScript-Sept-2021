let lon;
let lat;
let temperature = document.querySelector(".temp");
let desc = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");

const kelvin = 273;
  
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      // API ID
      const apiKey = "058b0dcb5053e6b18cb4bf8970076981";
  
      // API URL
      const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=058b0dcb5053e6b18cb4bf8970076981`;
  
      // Calling the API
      fetch(base)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          desc.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          let icon1 = data.weather[0].icon;
          icon.innerHTML = 
              `<img src="icons/${icon1}.png" style= 'height:10rem'/>`;
        });
    });
  }
});