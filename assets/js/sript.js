var mymap = L.map('mapid').setView([43.184, 3.0], 14);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoibWlrYWlsLXNpbXBsb24iLCJhIjoiY2tqbDUxYWh1MW96dzJzcW9idHliYmphbSJ9.-Sli2mVPqF-iko6bOZYexA',
  }
).addTo(mymap);

// --------------------POINTEUR GDP INDICATEUR ICONS-------

// ICON SIZE AND SHADOW
var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [50, 50],
    iconAnchor: [0, 0],
    popupAnchor: [20, 0],
  },
});

// NEW ICON NEW INDICATOR

var burgerIcon = new LeafIcon({ iconUrl: 'assets/images/icon1.png' }),
  drinkIcon = new LeafIcon({ iconUrl: 'assets/images/icon2.png' }),
  parkIcon = new LeafIcon({ iconUrl: 'assets/images/icon3.png' }),
  poolIcon = new LeafIcon({ iconUrl: 'assets/images/icon4.png' }),
  shopIcon = new LeafIcon({ iconUrl: 'assets/images/icon5.png' });

// Function that take each "new" object variable into consideration for the plugin
L.icon = function (options) {
  return new L.Icon(options);
};

// AND THE POSITION OF EACH MARKER EACH ICONS

L.marker([43.17313631904457, 2.9919403341045], { icon: burgerIcon })
  .addTo(mymap)
  .bindPopup(
    ' <div class="row"><div class=""><div class="card"><img src="assets/images/kfc.jpeg" alt="image KFC" class="card-img-top"><div class="card-body"><h5 class="card-title">KFC</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p><a href="tel:+04 68 48 91 03" class="btn btn-outline-success btn-sm">04 68 48 91 03</a></div></div></div></div>'
  );

L.marker([43.18239301927895, 3.0064903082615326], { icon: drinkIcon })
  .addTo(mymap)
  .bindPopup(
    ' <div class="row"><div class=""><div class="card"><img src="assets/images/rive.jpg" alt="image Rive Gauche" class="card-img-top"><div class="card-body"><h5 class="card-title">Le Rive Gauche</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p><a href="tel:+04 68 32 36 62" class="btn btn-outline-success btn-sm">04 68 32 36 62</a></div></div></div></div>'
  );

L.marker([43.180662268367215, 2.9982608361486296], { icon: parkIcon })
  .addTo(mymap)
  .bindPopup(
    ' <div class="row"><div class=""><div class="card"><img src="assets/images/jardin.jpg" alt="image Jardin Floral" class="card-img-top"><div class="card-body"><h5 class="card-title">Jardin Des Martyrs et de la Resistance</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p></div></div></div></div>'
  );

L.marker([43.17427507468739, 2.99419765772774], { icon: poolIcon })
  .addTo(mymap)
  .bindPopup(
    ' <div class="row"><div class=""><div class="card"><img src="assets/images/espace.jpg" alt="image Espace Liberté" class="card-img-top"><div class="card-body"><h5 class="card-title">La Piscinne de l Espace Liberté </h5><p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p><a href="tel:+04 68 42 17 89" class="btn btn-outline-success btn-sm">04 68 42 17 89</a></div></div></div></div>'
  );

L.marker([43.16143395962382, 2.9813783568028516], { icon: shopIcon })
  .addTo(mymap)
  .bindPopup(
    ' <div class="row"><div class=""><div class="card"><img src="assets/images/h&m.jpg" alt="image H&M" class="card-img-top"><div class="card-body"><h5 class="card-title">Magasin H&M</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p><a href="tel:+0 805 08 88 88" class="btn btn-outline-success btn-sm">0 805 08 88 88</a></div></div></div></div>'
  );

// --------------------------------------------WEATHER API -------------------------------------

// ------------------------------CITY COUNTRY LAT LONG SELECTION-----------------------

var weatherCity = 'Narbonne'; // citySelector.textContent; //Choose a CITY For the Weather
var weatherCountry = 'fr'; //countrySelector.textContent; //Choose a CUNTRY  fr (France) or gb for (England)

const citySelector = document.querySelector('.weather-location');
const countrySelector = document.querySelector('.weather-location-country');

const langSelect = document.getElementById('lang-select'); //LANG SELECTOR

citySelector.addEventListener('click', () => {
  citySelector.contentEditable = true;
  countrySelector.contentEditable = true;
});

citySelector.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

countrySelector.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    citySelector.contentEditable = false;
    countrySelector.contentEditable = false;

    console.log(citySelector.textContent);

    weatherCity = citySelector.textContent;
    weatherCountry = countrySelector.textContent;

    mainCurentWeather();
  }
});

// ------------------------------_/CITY COUNTRY LAT LONG SELECTION-----------------------

// --------------OPTION DATE BEST FORMAT
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const options2 = {
  weekday: 'long',
  day: 'numeric',
};
// ----------------/OPTION DATE BEST FORMAT

async function mainCurentWeather() {
  const proxy = ''; //'https://cors-anywhere.herokuapp.com/'; //PROXY

  // *****----------------------------------------------_API WEATHER CURENT WEATHER_-----------------------------*****
  const weatherCurrentApi =
    proxy +
    `http://api.openweathermap.org/data/2.5/weather?q=` +
    weatherCity +
    ',' +
    weatherCountry +
    `&units=metric&appid=1804d187aa922b741cde5a2c8ae1c64b&lang=` +
    weatherCountry;

  const apiCurentWeatherInfo = await fetch(weatherCurrentApi)
    .then((res) => res.json())
    .then((json) => json);

  const cityLatitude = apiCurentWeatherInfo.coord.lat; //Choose a CITY LATITUDE For the Weather
  const cityLongitude = apiCurentWeatherInfo.coord.lon; //Choose a CITY LOngitude For the Weather

  console.log(apiCurentWeatherInfo);

  displayCurentWeatherInfos(apiCurentWeatherInfo);

  // *****----------------------------------------------_/API WEATHER CURENT WEATHER_-----------------------------*****

  // *****----------------------------------------------_API WEATHER 7 DAYS FORECAST_-----------------------------*****

  const weatherApiOneCall =
    proxy +
    `http://api.openweathermap.org/data/2.5/onecall?lat=` +
    cityLatitude +
    '&lon=' +
    cityLongitude +
    `&units=metric&appid=1804d187aa922b741cde5a2c8ae1c64b&lang=` +
    weatherCountry;

  const apiWeekForecastInfo = await fetch(weatherApiOneCall)
    .then((res) => res.json())
    .then((json) => json);

  console.log(apiWeekForecastInfo);
  displayWeekWeatherInfos(apiWeekForecastInfo);

  // *****----------------------------------------------_/API WEATHER 7 DAYS FORECAST_-----------------------------*****
}

// !!!-----------------------------------_API CURRENT WEATHER INFO_ -----------------------------!!!
function displayCurentWeatherInfos(data) {
  // ------------------------------html DOM selection-----------------------
  let weatherDate = document.querySelector('.weather-date');
  let weatherDescription = document.querySelector('.weather-description');
  let weatherDegre = document.querySelector('.weather-degre');
  let weatherWind = document.querySelector('.weather-wind');
  let curentWeatherHtml = document.getElementById('curentWeather');

  // ------------------Set html DOM from api CURENT WEATHER -----------------------
  const { main, weather, dt, wind, sys } = data;

  weatherCountry = sys.country;

  // LANG SELECT
  langSelect.addEventListener('input', handleSelect);
  let docDateLang = 'fr';

  function handleSelect(ev) {
    let langIndexSelect = ev.target;
    docDateLang = langIndexSelect.value;

    dateCurent = new Date(dt * 1000).toLocaleDateString(docDateLang, options); //Curent Date Format
    weatherDate.textContent = dateCurent; //Curent Date
  }

  dateCurent = new Date(dt * 1000).toLocaleDateString(docDateLang, options); //Curent Date Format
  weatherDate.textContent = dateCurent; //Curent Date
  // LANG SELECT

  weatherDegre.textContent = Math.round(main.temp); //Curent Temp

  weatherWind.textContent = 'Vents: ' + Math.round(wind.speed * 3.6) + 'km/h';

  weatherDescription.textContent = weather[0].description; //Curent Description

  curentWeatherIcon = weather[0].icon; //Curent Icon

  // curent BackGround Template
  let curentIconTemplate =
    `http://openweathermap.org/img/wn/` + curentWeatherIcon + `@2x.png`;

  curentWeatherHtml.style.background =
    `url(` + curentIconTemplate + `) no-repeat center`;
}

// !!!-----------------------------------_/API CURRENT WEATHER INFO_ -----------------------------!!!

// !!!-----------------------------------_API WEEK WEATHER INFO_ -----------------------------!!!
function displayWeekWeatherInfos(data) {
  // SELECTION 7 JOUR

  let weekDaysArray = document.getElementsByClassName('weekDay');
  let weekTempsArray = document.getElementsByClassName('weekTemp');
  let weekIconsArray = document.getElementsByClassName('weekIcons');

  // _/SELECTION 7 JOUR

  const { current, daily } = data;

  for (let i = 1; i < daily.length; i++) {
    // LANG SELECT
    langSelect.addEventListener('input', handleSelect);
    let docDateLang = 'fr';

    function handleSelect(ev) {
      let langIndexSelect = ev.target;
      let docDateLang = langIndexSelect.value;
      var weekDays = new Date(daily[i].dt * 1000).toLocaleDateString(
        docDateLang,
        options2
      ); //FAIRE ATTENTION INITIALISATION
      weekDaysArray[i - 1].textContent = weekDays;
    }

    var weekDays = new Date(daily[i].dt * 1000).toLocaleDateString(
      docDateLang,
      options2
    ); //FAIRE ATTENTION INITIALISATION

    weekDaysArray[i - 1].textContent = weekDays;

    weekTempsArray[i - 1].textContent = Math.round(daily[i].temp.day);

    var iconsWeekForecast = daily[i].weather[0].icon;

    // Week icon Template
    let weekIconsTemplate =
      `http://openweathermap.org/img/wn/` + iconsWeekForecast + `@2x.png`;

    weekIconsArray[i - 1].style.background =
      `url(` + weekIconsTemplate + `) no-repeat center`;
  }
}

// !!!-----------------------------------_API WEEK WEATHER INFO_ -----------------------------!!!

mainCurentWeather();
