  let london = document.getElementById("london-clock");
  let sofia = document.getElementById("sofia-clock");
  let beijing = document.getElementById("beijing-clock");
  let d = new Date();

  function clock() {
    function londonClock() {
      let londonOffset = "0";
      let londonClock = d.getTime() + d.getTimezoneOffset() * 60000;
      let ndLondon = new Date(londonClock + 3600000 * londonOffset);
      let londonDateEl = document.createElement("p");
      londonDateEl.classList.add("london-date");
      londonDateEl.innerHTML = ndLondon.toLocaleDateString("en");
      let londonTimeEl = document.createElement("p");
      londonTimeEl.classList.add("london-time");
      londonTimeEl.innerHTML = ndLondon.toLocaleTimeString("en")
      london.appendChild(londonDateEl);
      london.appendChild(londonTimeEl);
    }
  londonClock()
  
    function beijingClock() {
      let beijingOffset = "9";
      let beijingClock = d.getTime() + d.getTimezoneOffset() * 60000;
      let ndbeijing = new Date(beijingClock + 3600000 * beijingOffset);
      let beijingDateEl = document.createElement("p");
      beijingDateEl.classList.add("beijing-date");
      beijingDateEl.innerHTML = ndbeijing.toLocaleDateString("en");
      let beijingTimeEl = document.createElement("p");
      beijingTimeEl.classList.add("beijing-time");
      beijingTimeEl.innerHTML = ndbeijing.toLocaleTimeString('en')
      beijing.appendChild(beijingDateEl);
      beijing.appendChild(beijingTimeEl);
    }
  beijingClock()
  
    function sofiaClock() {
      let sofiaOffset = "2";
      let sofiaClock = d.getTime() + d.getTimezoneOffset() * 60000;
      let ndsofia = new Date(sofiaClock + 3600000 * sofiaOffset);
      let sofiaDateEl = document.createElement("p");
      sofiaDateEl.classList.add("sofia-date");
      sofiaDateEl.innerHTML = ndsofia.toLocaleDateString("en");
      let sofiaTimeEl = document.createElement("p");
      sofiaTimeEl.classList.add("sofia-time");
      sofiaTimeEl.innerHTML = ndsofia.toLocaleTimeString("en")
      sofia.appendChild(sofiaDateEl);
      sofia.appendChild(sofiaTimeEl);
    }  
    sofiaClock()
  }
  clock();