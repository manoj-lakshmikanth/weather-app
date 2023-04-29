import hotimg from './images/hot.jpg';
import coldimg from './images/cold.jpg';
import Details from './components/Details';
import getWeatherDetails from './Service';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [inpVal, setInpVal] = useState('Bengaluru');
  const [dataObj, setDataObj] = useState(null);
  const [bg, setBg] = useState();

  const getData = async () => {
    let returnedData = await getWeatherDetails(inpVal);
    console.log(returnedData);

    if (returnedData === 'error') {
      toast.warning('Please enter a valid city name!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      setDataObj(returnedData);
    }

    if (returnedData.temp <= 20) {
      setBg(coldimg);
    }
    if (returnedData.temp > 20) {
      setBg(hotimg);
    }
    setInpVal('');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {dataObj && (
          <div className="container">
            {/* inputs */}
            <div className="section section__inputs">
              <input
                type="text"
                placeholder="Enter city..."
                onChange={(e) => {
                  setInpVal(e.target.value);
                }}
                value={inpVal}
              />
              <button
                onClick={() => {
                  getData();
                }}
              >
                OK
              </button>
              <ToastContainer />
            </div>
            {/* Description */}
            <div className="section section__temperature">
              <div className="description">
                <h1>
                  {dataObj.name}, {dataObj.country}
                </h1>
                <h2>{Math.round(dataObj.temp)}°C</h2>
              </div>
              <div className="temperature">
                <img src={dataObj.imgIcon} alt="weatherIcon" />
                <h3>{dataObj.description}</h3>
              </div>
            </div>
            {/* Details */}
            <Details data={dataObj} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
