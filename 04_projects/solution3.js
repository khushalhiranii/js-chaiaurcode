const clock = document.getElementById('clock');

setInterval(function(){let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();}, 1000)

  // setInterval(function(), interval) --> setInterval runs function() after the given interval which is in miliseconds