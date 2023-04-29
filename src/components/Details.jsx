import React from 'react';
import '../index.css';
import { FaArrowDown, FaWind, FaArrowUp } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { MdCompress } from 'react-icons/md';

const Details = (props) => {
  return (
    <div className="details">
      <div className="individual_items">
        <h2>
          <span className="icon">
            <FaArrowDown />
          </span>
          Minimum Temperature
        </h2>
        <h2>{Math.round(props.data.temp_min)} °C</h2>
      </div>
      <div className="individual_items">
        <h2>
          <span className="icon">
            <FaArrowUp />
          </span>
          Maximum Temperature
        </h2>
        <h2>{Math.round(props.data.temp_max)} °C</h2>
      </div>
      <div className="individual_items">
        <h2>
          <span className="icon">
            <WiHumidity />
          </span>
          Humidity
        </h2>
        <h2>{Math.round(props.data.humidity)} %</h2>
      </div>
      <div className="individual_items">
        <h2>
          <span className="icon">
            <MdCompress />
          </span>
          Pressure
        </h2>
        <h2>{Math.round(props.data.pressure)} hPa</h2>
      </div>
      <div className="individual_items">
        <h2>
          <span className="icon">
            <FaWind />
          </span>
          Wind Speed
        </h2>
        <h2>{props.data.speed} m/s</h2>
      </div>
    </div>
  );
};

export default Details;
