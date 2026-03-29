async function getWeathr() {
  const city = document.getElementById("day_input").value;

  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

  const geoRes = await fetch(geoUrl);
  const geoData = await geoRes.json();

  if (!geoData.results) {
    alert("City not found");
    return;
  }

  const lat = geoData.results[0].latitude;
  const lon = geoData.results[0].longitude;
  const place = geoData.results[0].name;

  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

  const weatherRes = await fetch(weatherUrl);
  const weatherData = await weatherRes.json();

  const days = weatherData.daily.time;
  const maxTemp = weatherData.daily.temperature_2m_max;
  const minTemp = weatherData.daily.temperature_2m_min;

  let output = `<h3>Weather in ${place}</h3>`;

  for (let i = 0; i < 7; i++) {
    output += `
      <div class="day">
        <strong>${days[i]}</strong><br>
        🌡 Max: ${maxTemp[i]}°C<br>
        ❄ Min: ${minTemp[i]}°C
      </div>
    `;
  }

  document.getElementById("Weathre").innerHTML = output;
}