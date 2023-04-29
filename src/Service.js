import axios from 'axios';

const API_key = 'eedc58e16cd95c638fa7906fa272c1d0';

const makeUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

let getWeatherDetails = async (city, units = 'metric') => {
  try {
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${units}`;

    const data = await axios(Url);

    const {
      main: { temp, temp_min, temp_max, pressure, humidity },
      weather,
      name,
      sys: { country },
      wind: { speed },
    } = data.data;

    const { description, icon } = weather[0];

    return {
      description,
      temp,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      name,
      imgIcon: makeUrl(icon),
    };
  } catch (error) {
    return 'error';
  }
};

export default getWeatherDetails;
