import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { getCityApi, getWeatherApi } from "./utils/weather";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MagnifyingGlass } from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [openBtn, setOpenBtn] = useState(false);
  const [isCity, setIsCity] = useState([]);
  const [dataCity, setDataCity] = useState({});
  const [dataList, setDataList] = useState([]);

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
        setTimeout(() => setIsLoading(false), [1000]);
        setIsCity(res.data[0]);
      } catch (err) {
        setTimeout(() => setIsLoading(false), [1000]);
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
          setDataList(list);
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
          <Section1
            selected={selected}
            handleSelected={handleSelectCity}
            openBtn={openBtn}
            handleBtnCity={handleOpenBtnSelect}
            isCity={isCity}
            dataCity={dataCity}
            dataList={dataList}
          />
          <Section2 />
          <Section3 />
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
