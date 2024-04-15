import React, { useState, useEffect } from "react";
import LineGradient from "../components/LineGradient";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = "dbbcf3bb48c73645dba1d2da754c3ed6";
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
    <footer className="h-auto bg-orange-400 p-10">
      <div className="w-4/6 mx-auto">
        {weather && (
          <div className="w-full md:flex justify-between items-center">
            <div className="w-3/6 weather-info text-black font-bold">
              <p>
                Weather in {weather.name}: {weather.main.temp}°C,{" "}
                {weather.weather[0].description}
              </p>
            </div>
            <div style={{ height: "120px", width: "100%" }}>
              <MapContainer
                center={[weather.coord.lat, weather.coord.lon]}
                zoom={12}
                scrollWheelZoom={false}
                style={{ height: "120px", width: "100%" }}
                className="w-full h-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[weather.coord.lat, weather.coord.lon]}>
                  <Popup>Current weather location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        )}
        <br />
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
