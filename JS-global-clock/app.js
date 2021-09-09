  let london = document.getElementById("london-clock");
  let sofia = document.getElementById("sofia-clock");
  let beijing = document.getElementById("beijing-clock");
  let d = new Date();

  function clock() {
    function londonClock() {
      let londonDateEl = document.createElement("p");
      londonDateEl.classList.add("london-date");
      londonDateEl.innerHTML = d.toLocaleDateString("en", {timeZone: "Europe/London"});
      let londonTimeEl = document.createElement("p");
      londonTimeEl.classList.add("london-time");
      londonTimeEl.innerHTML = d.toLocaleTimeString("en", {timeZone: "Europe/London"})
      london.appendChild(londonDateEl);
      london.appendChild(londonTimeEl);
    }
  londonClock()
  
    function beijingClock() {
      let beijingDateEl = document.createElement("p");
      beijingDateEl.classList.add("beijing-date");
      beijingDateEl.innerHTML = d.toLocaleDateString("en", {timeZone:   'Asia/Shanghai'    });
      let beijingTimeEl = document.createElement("p");
      beijingTimeEl.classList.add("beijing-time");
      beijingTimeEl.innerHTML = d.toLocaleTimeString('en', {timeZone: 'Asia/Shanghai'})
      beijing.appendChild(beijingDateEl);
      beijing.appendChild(beijingTimeEl);
    }
  beijingClock()
  
    function sofiaClock() {
      let sofiaDateEl = document.createElement("p");
      sofiaDateEl.classList.add("sofia-date");
      sofiaDateEl.innerHTML = d.toLocaleDateString("en", {timeZone: "Europe/Sofia"});
      let sofiaTimeEl = document.createElement("p");
      sofiaTimeEl.classList.add("sofia-time");
      sofiaTimeEl.innerHTML = d.toLocaleTimeString("en", {timeZone:"Europe/Sofia"})
      sofia.appendChild(sofiaDateEl);
      sofia.appendChild(sofiaTimeEl);
    }  
    sofiaClock()
  }
  clock();