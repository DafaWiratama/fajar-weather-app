import { useEffect, useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

function Section1({ city }) {
  const [selected, setSelected] = useState(null);
  const [openBtn, setOpenBtn] = useState(false);

  const handleOpenBtnSelect = () => setOpenBtn(!openBtn);
  const handleSelectCity = (e) => {
    setSelected(e.target.name);
    setOpenBtn(false);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <section className="wrapper-section1">
      <div className="wrapper-title">
        <span className="title">
          <h1>Jakarta, Indonesia</h1>
          <p>Sunday, 4th Agust</p>
        </span>

        <div className="dropdown">
          <button onClick={handleOpenBtnSelect}>
            {selected ? <p>{selected}</p> : <p>Choose City</p>}
            <UilAngleDown
              className={`icon-btn-select ${openBtn ? "open-icon" : ""}`}
            />
          </button>
          <div className={`menu-dropdown ${openBtn ? "open" : null}`}>
            {city.map((item, idx) => (
              <button key={idx} name={item} onClick={handleSelectCity}>
                {item}
              </button>
            ))}
          </div>
        </div>
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
