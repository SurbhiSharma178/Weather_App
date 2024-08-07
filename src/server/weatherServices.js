import { DateTime} from "luxon"
const API_KEY='cafc95ebc179b3187de1776bdc021416'

const BASE_URL='https://api.openweathermap.org/data/2.5/'

const getWeatherData= (infoType, searchParams)=>{
  const url = new URL(BASE_URL + infoType)
  url.search= new URLSearchParams({...searchParams,appid: API_KEY});

  return fetch(url)
  .then((res)=>res.json())
}

const iconUrlFromCode=(icon)=> `http://openweathermap.org/img/wn/01d@2x.png`
  

const formatToLocal=(sec,offset,format="cccc ,dd LLL yyyy' | Local time :'hh:mm a")=>
  DateTime.fromSeconds(sec+offset ,{zone:'utc'}).toFormat(format);




const formatCurrent=(data)=>{
   const {
    coord:{lat,lon}, 
    main:{temp,feels_like,temp_min,temp_max, humidity},
    name, dt,sys:{country, sunrise,sunset},
    weather,
    wind:{speed},
    timezone,
}= data;
const {main:details,icon}= weather[0]
const formattedLocalTime= formatToLocal(dt,timezone);

return { temp , feels_like,temp_max,temp_min,humidity,name,country, 
  sunrise:formatToLocal(sunrise , timezone,'hh:mm a'),
  sunset:formatToLocal(sunset , timezone,'hh:mm a'),
  speed,
  details,
  icon:iconUrlFromCode(icon),
  formattedLocalTime
  };
} 

const getFormatteWeatherData = async(searchParams)=>{
  const formatedCurrentWeather= await getWeatherData('weather',searchParams)
  .then(formatCurrent)
  console.log(formatedCurrentWeather);
  return {...formatedCurrentWeather}
  
}

export default getFormatteWeatherData