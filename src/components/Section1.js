import React from "react";

function Section1(props) {
  return (
    <section className="wrapper-section1">
      <div className="wrapper-title">
        <span className="title">
          <h1>Jakarta, Indonesia</h1>
          <p>Sunday, 4th Agust</p>
        </span>

        <button>Dropdowns</button>
      </div>
      <div className="wrapper-weather">
        <div className="weather">
          <div className="left">
            <p>ICON WEATHER</p>
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
