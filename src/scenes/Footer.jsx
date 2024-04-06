import React, { useState, useEffect } from "react";
import LineGradient from "../components/LineGradient";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = "dbbcf3bb48c73645dba1d2da754c3ed6";
    // Using navigator.geolocation to get user's current position
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    });
  }, []);

  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-4/6 mx-auto">
        {/* Weather Section */}
        {/* Weather and Map Section */}
        {weather && (
          <div className="md:flex justify-between items-center">
            {/* Weather Info */}
            <div className="weather-info text-white">
              <p>
                Weather in {weather.name}: {weather.main.temp}°C,{" "}
                {weather.weather[0].description}
              </p>
            </div>
            {/* Map */}
            <div style={{ height: "120px", width: "100%" }}>
              <MapContainer
                center={[weather.coord.lat, weather.coord.lon]}
                zoom={12}
                scrollWheelZoom={false}
                style={{ height: "120px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[weather.coord.lat, weather.coord.lon]}>
                  <Popup>Current weather location.</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        )}
        {/* Copyright Section */}
        <div className="md:flex justify-between items-center mb-4">
          <p className="font-playfair font-semibold text-2xl text-white">
            FARZAD SANJARANI
          </p>
        </div>
        <LineGradient />
        <div className="md:flex justify-between text-left">
          <p className="font-playfair text-md text-white">
            ©2024 Farzad Sanjarani | React Developer project | IFN666 Project |
            QUT University | Brisbane QLD.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
