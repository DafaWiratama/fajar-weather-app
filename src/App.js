import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { getCityApi, getWeatherApi } from "./utils/weather";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MagnifyingGlass } from "react-loader-spinner";
import noData from "./assets/nodata.png";
import moment from "moment/moment";
import { city } from "./city";
import { UilAngleDown } from "@iconscout/react-unicons";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [openBtn, setOpenBtn] = useState(false);
  const [isCity, setIsCity] = useState([]);
  const [dataCity, setDataCity] = useState({});
  const [dataList, setDataList] = useState([]);
  const [dataWeather, setDataWeather] = useState([]);
  const date = moment();
  const day = date.format("dddd");
  const currentDate = date.format("MMMM Do YYYY");

  const handleOpenBtnSelect = () => setOpenBtn(!openBtn);

  const handleSelectCity = (e) => {
    setSelected(e.target.name);
    setOpenBtn(false);
  };

  useEffect(() => {
    const getCity = async () => {
      try {
        setIsLoading(true);

        const res = await getCityApi(selected);
        setTimeout(() => setIsLoading(false), [500]);
        setIsCity(res.data[0]);
      } catch (err) {
        setTimeout(() => setIsLoading(false), [500]);
        return toast.error("Sorry, an error occurred", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }
    };
    if (selected) {
      getCity();
    }
  }, [selected]);

  useEffect(() => {
    const { lat, lon } = isCity;
    if (lat !== undefined || lon !== undefined) {
      const getWeather = async () => {
        try {
          const res = await getWeatherApi(lat, lon);
          const { city, list } = res.data;
          setDataCity(city);
          setDataWeather(list);

          if (list.length !== 0) {
            const dateNow = moment().format("L");
            let weatherTmp = [];
            list.forEach((item) => {
              const time = item.dt_txt;
              const dateTmp = moment(time).format("L");
              if (dateNow === dateTmp) {
                weatherTmp.push(item);
              }
              if (time === weatherTmp[0]) {
                setIcon(item.weather[0].icon);
              }
            });
            setDataList(weatherTmp);
          }
        } catch (err) {
          return toast.error("Sorry, an error occurred", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        }
      };
      getWeather();
    }
  }, [isCity]);

  return (
    <>
      {isLoading ? (
        <div className="wrapper-loading">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#0000"
            color="#F8CBA6"
          />
        </div>
      ) : (
        <>
          <div className="wrapper-title">
            <span className="title">
              <h1>{selected ? selected : "-"}</h1>
              <p>{`${day}, ${currentDate}`}</p>
            </span>

            <div className="dropdown">
              <button onClick={handleOpenBtnSelect}>
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
                    onClick={handleSelectCity}>
                    {Object.values(city)[idx]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {dataList.length !== 0 || Object.values(dataCity).length !== 0 ? (
            <>
              <Section1 dataList={dataList} dataCity={dataCity} />
              <Section2 data={dataList} />
              <Section3 data={dataWeather} />
            </>
          ) : (
            <div className="wrapper-nodata">
              <img src={noData} alt="no_data" />
              <p>No Data</p>
            </div>
          )}
        </>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
