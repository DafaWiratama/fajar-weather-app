import moment from "moment/moment";
import { city } from "../city";
import { UilAngleDown } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";

function Section1(props) {
  const {
    handleSelected,
    selected,
    openBtn,
    handleBtnCity,

    dataList,
  } = props;
  const date = moment();
  const day = date.format("dddd");
  const currentDate = date.format("MMMM Do YYYY");
  const [data, setData] = useState("");

  useEffect(() => {
    if (dataList.length !== 0) {
      setData(dataList[0].weather[0].icon);
    }
  }, [dataList]);

  return (
    <section className="wrapper-section1">
      <div className="wrapper-title">
        <span className="title">
          <h1>{selected ? selected : "-"}</h1>
          <p>{`${day}, ${currentDate}`}</p>
        </span>

        <div className="dropdown">
          <button onClick={handleBtnCity}>
            {selected ? <p>{selected}</p> : <p>Choose City</p>}
            <UilAngleDown
              className={`icon-btn-select ${openBtn ? "open-icon" : ""}`}
            />
          </button>
          <div className={`menu-dropdown ${openBtn ? "open" : null}`}>
            {Object.keys(city).map((item, idx) => (
              <button
                key={idx}
                name={Object.values(city)[idx]}
                onClick={handleSelected}>
                {Object.values(city)[idx]}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="wrapper-weather">
        <div className="weather">
          <div className="left">
            <img
              src={`https://openweathermap.org/img/wn/${data}@2x.png`}
              alt="img"
            />
            <p>21 DRAJAT</p>
          </div>
          <div className="right">
            <div className="top">
              <p>dearajat</p>
              <p>dearajat</p>
              <p>dearajat</p>
            </div>
            <div className="bottom">
              <p>dearajat</p>
              <p>dearajat</p>
              <p>dearajat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
