// Geocoding API (Nominatim)
const geocodingApiUrl = "https://nominatim.openstreetmap.org/search?format=json&q=";
const geocodingCityPlzApiUrl = "https://nominatim.openstreetmap.org/search?format=json";
// Beispiel:
// https://nominatim.openstreetmap.org/search?format=json&q=Berlin

// Wetter API (Open-Meteo)
const weatherApiUrl = "https://api.open-meteo.com/v1/forecast?current_weather=true&";
// Beispiel (Koordinaten für Berlin):
// https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=52.52&longitude=13.41

class WeatherData {
    // TODO Klasse für Wetterdaten
    #city;
    #temp;
    #code;


    constructor(city, temp, code) {
        this.#city = city;
        this.#temp = temp;
        this.#code = code;
    }

    get cityName() {
        return this.#city;
    }

    get temperature() {
        return this.#temp;
    }

    get weatherCode() {
        return this.#code;
    }
}

class LocationData {
    // TODO Klasse für Ortsdaten
    #lon;
    #lat;
    #name;

    constructor(lon, lat, name) {
        this.#lon = lon;
        this.#lat = lat;
        this.#name = name;
    }

    get longitude() {
        return this.#lon;
    }

    get latitude() {
        return this.#lat;
    }

    get locationName() {
        return this.#name;
    }
}


const cityInput = document.getElementById("city");
const zipInput = document.getElementById("zip");
const searchButton = document.getElementById("search");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("icon");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

searchButton.addEventListener("click", searchWeather);


async function searchWeather() {
    const city = cityInput.value;
    const plz = zipInput.value;
    try {
        const locationData = await getCoordinates(city, plz);   // Ortsdaten abfragen
        const weatherData = await fetchWeatherData(locationData);   // Wetterdaten abfragen
        updateWeatherData(weatherData);  // Wetterdaten anzeigen
    } catch (error) {
        console.error("Fehler beim Abfragen des Wetters: ", error);
        // TODO Fehler auf Webseite anzeigen
    }
}

function updateWeatherData(weatherData) {
    // TODO Wetterdaten auf Webseite anzeigen
    cityName.textContent = weatherData.cityName;
    temp.textContent = weatherData.temperature;
    desc.textContent = getWeatherDescription(weatherData.weatherCode);
    icon.innerHTML = getWeatherIcon(weatherData.weatherCode);
}

async function getCoordinates(city, zip) {
    // TODO Ortsdaten mittels fetch abfragen
    const url = geocodingCityPlzApiUrl + "&postalcode=" + zip + "&city=" + city;
    // console.log(url);
    const data = await fetch(url);
    // console.log(data);
    const json = await data.json();
    // console.log(json);
    // console.log(json[0]);
    const lon = json[0].lon;
    const lat = json[0].lat;
    console.log("lon: " + lon);
    const ld = new LocationData(lon, lat, json[0].display_name);
    return ld;
}

async function fetchWeatherData(locationData) {
    // TODO Wetterdaten für den gegebenen Ort mittels fetch abfragen
    const url = `${weatherApiUrl}latitude=${locationData.latitude}&longitude=${locationData.longitude}`;
    const data = await fetch(url);
    const json = await data.json();
    // console.log(json);
    const wd = new WeatherData(locationData.locationName,
        json.current_weather.temperature,
        json.current_weather.weathercode);
    console.log(wd);
    return wd;
}

// Abfrage des Wettericons zu einem Wettercode
function getWeatherIcon(weathercode) {
    let iconName;
    switch (weathercode) {
        case 0:
            iconName = "clear-day.svg";
            break;
        case 1:
        case 2:
        case 3:
            iconName = "partly-cloudy-day.svg";
            break;
        case 45:
        case 48:
            iconName = "fog.svg";
            break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            iconName = "rain.svg";
            break;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            iconName = "snow.svg";
            break;
        case 95:
        case 96:
        case 99:
            iconName = "thunderstorms.svg";
            break;
        default:
            iconName = "unknown.svg"; // Füge ein Icon für unbekannte Wettercodes hinzu
    }
    return `<img src="icons/${iconName}" alt="Wetter Icon">`;
}

// Abfrage der Wetterbeschreibung zu einem Wettercode
function getWeatherDescription(weathercode) {
    const weatherDescriptions = {
        0: "Klarer Himmel",
        1: "Leicht bewölkt",
        2: "Teilweise bewölkt",
        3: "Bewölkt",
        45: "Nebel",
        48: "Ablagerungsnebel",
        51: "Leichter Nieselregen",
        53: "Mäßiger Nieselregen",
        55: "Starker Nieselregen",
        56: "Leichter gefrierender Nieselregen",
        57: "Starker gefrierender Nieselregen",
        61: "Leichter Regen",
        63: "Mäßiger Regen",
        65: "Starker Regen",
        66: "Leichter gefrierender Regen",
        67: "Starker gefrierender Regen",
        71: "Leichter Schneefall",
        73: "Mäßiger Schneefall",
        75: "Starker Schneefall",
        77: "Schneeregen",
        80: "Leichte Regenschauer",
        81: "Mäßige Regenschauer",
        82: "Starke Regenschauer",
        85: "Leichte Schneeschauer",
        86: "Starke Schneeschauer",
        95: "Gewitter",
        96: "Gewitter mit Hagel",
        99: "Gewitter mit starkem Hagel"
    };
    return weatherDescriptions[weathercode] || "Unbekannt";
}
