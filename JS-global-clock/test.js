//testing time zones

let x = new Date().toLocaleTimeString('en-US', {timeZone: 'Europe/London', hourCycle: 'h23'});
console.log(x);
let londonTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
    hourCycle: "h23",
  });
  console.log(londonTime);