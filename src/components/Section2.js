import moment from "moment";

function Section2({ data }) {
  return (
    <section className="wrapper-section2">
      <h1>Today&apos;s weather</h1>
      <div className="wrapper-card-section2">
        {data.length !== 0 &&
          data.map((item, idx) => (
            <div key={idx} className="card-section2">
              <p>{moment(item.dt_txt).format("LT")}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="icon"
                height={100}
              />
              <p>{item.main.temp} &deg;</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Section2;
