function time() {
  let dateLondonEl = document.querySelector(".date-london");
  let timeLondonEl = document.querySelector(".time-london");
  let dateSofiaEl = document.querySelector(".date-sofia");
  let timeSofiaEl = document.querySelector(".time-sofia");
  let dateBeijingEl = document.querySelector(".date-beijing");
  let timeBeijingEl = document.querySelector(".time-beijing");

  let londonDate = new Date().toLocaleDateString("en-US", {
    timeZone: "Europe/London",
    hourCycle: "h23",
  });
  let londonTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
    hourCycle: "h23",
  });
  dateLondonEl.innerHTML = londonDate;
  timeLondonEl.innerHTML = londonTime;

  let beijingDate = new Date().toLocaleDateString("en-US", {
    timeZone: "Asia/Beijing",
    hourCycle: "h23",
  });
  let beijingTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Beijing",
    hourCycle: "h23",
  });
  dateBeijingEl.innerHTML = beijingDate;
  timeBeijingEl.innerHTML = beijingTime;

  let sofiaDate = new Date().toLocaleDateString("en-US", {
    timeZone: "Europe/Sofia",
    hourCycle: "h23",
  });
  let sofiaTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/Sofia",
    hourCycle: "h23",
  });
  dateSofiaEl.innerHTML = sofiaDate;
  timeSofiaEl.innerHTML = sofiaTime;
}
