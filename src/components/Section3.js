/* eslint-disable no-unused-vars */
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";

function Section3({ data }) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (data.lengt !== 0) {
      let tempWeather = [];
      const dateNow = moment().format("L");
      data.forEach((item) => {
        const date = moment(item.dt_txt).format("L");
        if (date > dateNow) {
          const timeStr = "9:00 PM";
          const time = moment(item.dt_txt).format("LT");
          if (timeStr === time) {
            tempWeather.push(item);
          }
        }
      });
      setWeather(tempWeather);
    }
  }, []);

  useEffect(() => console.log(weather), [weather]);

  return (
    <section className="wrapper-section3">
      <h1>Next 3 days</h1>
      {weather.length !== 0 &&
        weather.map((item, idx) => (
          <div key={idx} className="card-section3">
            <div className="left-section3">
              <p>{moment(item.dt_txt).format("dddd")}</p>
              <p>{`${moment(item.dt_txt).date()} / ${
                moment(item.dt_txt).month() + 1
              }`}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="icon"
                height={100}
              />
            </div>
            <div className="right-section3">
              <div className="low">
                <p>{item.main.temp_min} &deg;</p>
                <p>Low</p>
              </div>
              <div className="high">
                <p>{item.main.temp_max} &deg;</p>
                <p>High</p>
              </div>
              <div className="rain">
                <p>{item.main.humidity} 💦</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p>{item.wind.speed} 💨</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Section3;
