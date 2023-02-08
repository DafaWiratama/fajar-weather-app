import { useEffect, useState } from "react";
import moment from "moment";

function Section1(props) {
  const { dataList } = props;
  const [weatherNow, setWeatherNow] = useState({});
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (dataList.length !== 0) {
      const dateNow = moment().format("L");
      let weatherTmp = [];
      dataList.forEach((item) => {
        const time = item.dt_txt;
        const dateTmp = moment(time).format("L");
        if (dateNow === dateTmp) {
          weatherTmp.push(time);
        }
        if (time === weatherTmp[0]) {
          setWeatherNow(item);
          setIcon(item.weather[0].icon);
        }
      });
    }
  }, [dataList]);

  return (
    <section className="wrapper-section1">
      <div className="wrapper-weather">
        <div className="weather">
          <div className="left">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="img"
            />
            <div className="wrapper-data">
              <h1>
                {Object.keys(weatherNow).length !== 0 && weatherNow.main.temp}{" "}
                &deg;
              </h1>
              <p>
                {" "}
                {Object.keys(weatherNow).length !== 0 &&
                  weatherNow.weather[0].description}
              </p>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="wrapper-data">
                <p>
                  {Object.keys(weatherNow).length !== 0 &&
                    weatherNow.main.temp_max}{" "}
                  &deg;
                </p>
                <p>High</p>
              </div>
              <div className="wrapper-data">
                <p>
                  {Object.keys(weatherNow).length !== 0 &&
                    weatherNow.wind.speed}{" "}
                  💨
                </p>
                <p>Wind</p>
              </div>
            </div>
            <div className="bottom">
              <div className="wrapper-data">
                <p>
                  {Object.keys(weatherNow).length !== 0 &&
                    weatherNow.main.temp_min}{" "}
                  &deg;
                </p>
                <p>Low</p>
              </div>
              <div className="wrapper-data">
                <p>
                  {Object.keys(weatherNow).length !== 0 &&
                    weatherNow.main.humidity}{" "}
                  &deg;
                </p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
