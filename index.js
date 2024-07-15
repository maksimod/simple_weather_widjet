;(() => {
  const date = new Date();
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
  let week_day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][date.getDay()-1];
  let month_day = date.getDate();
  let year = date.getFullYear();

  document.getElementsByClassName('weak_day')[0].textContent = week_day;
  document.getElementsByClassName('month_day')[0].textContent = month_day;
  document.getElementsByClassName('year')[0].textContent = year;
  document.getElementsByClassName('month')[0].textContent = month;

  let cityName = "Moscow";
  document.getElementsByClassName('city')[0].textContent = cityName;

  var key = '244881b49e5c902f8b89f8d3159a51e0';
  console.log("OK!")
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityName + ',RUS&appid='+ key)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    document.getElementById("myImg").src = "http://openweathermap.org/img/w/"+data.weather[0].icon.toString()+".png";
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    let temp = celcius + ' ' +'°' + 'C';
    document.getElementsByClassName('temp')[0].textContent = temp;
    console.log("OK");
  })
  .catch(function() {
      // catch any errors
  });
})()
