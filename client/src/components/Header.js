import {React, useEffect, useState} from 'react';
import Signup from "./Signup";
import axios from "axios";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaUserAlt,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import myKey from "../context/config";
  



function Header (){
  const [weatherNow , setWeatherNow] = useState({});
  const [weather , setWeather] = useState({});

  const API_KEY = myKey.apiKeyWeather;
  
  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?Key=${API_KEY}&q=hamburg&days=1`).then((data)=> setWeatherNow(data.data.current));
  }, []);
  console.log( weatherNow);

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?Key=${API_KEY}&q=hamburg`).then((data)=> setWeather(data.data.forecast.forecastday[0].day));
  }, []);
  console.log( weather);



  const today = new Date().toLocaleDateString();
  // const showDate = today.getFullYear()+'-'+today.getMonth() +'-'+today.getDate();

  function changeHandle(e) {
    e.preventDefault();
    
  }
  
   return(
     <div >
        <div >
          <div className="headerFather" >
          <div className="weather">
            <div className="imgWeatherFather">
              {/* <img src={`${process.env.PUBLIC_URL}/${weather.condition.icon}`} alt="img" /> */}
            </div>
            <div className="fatherCurrentWeather">

              <div className="currentFather">
                <label className="currentLabel">Feels Like</label>
                <span className="currentData">{weatherNow.feelslike_c}</span>
              </div>
              <div className="currentFather">
                <label className="currentLabel">Temp</label>
                <span className="currentData">{weatherNow.temp_c}</span>
              </div>
              <div className="currentFather">
                <label className="currentLabel">Humidity</label>
                <span className="currentData">{weatherNow.humidity}</span>
              </div>

            </div>
            <div className="fatherCurrentWeather" >
            <div className="currentFather">
                <label className="currentLabel">High</label>
                <span className="currentData">{weather.maxtemp_c}</span>
              </div>
              <div className="currentFather">
                <label style={{marginLeft: "2vh"}} className="currentLabel">Low</label>
                <span style={{marginLeft: "2vh"}} className="currentData">{weather.mintemp_c}</span>
              </div>
              <div className="currentFather">
                <label className="currentLabelHumidity">HumidityAve</label>
                <span className="currentData">{weather.avghumidity}</span>
              </div>

            </div>
            </div>
          
                    <div className="date">
                      <input type="text"   onChange={changeHandle} value={today} />
                      </div>
           
<div className="iconFather">
                    <a className="icon" href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a  className="icon" href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a  className="icon" href="https://www.twitter.com/" target="_blank">
              < FaTwitter />
            </a>
            <a  className="icon" href="https://www.yoiutube.com/" target="_blank">
           < FaYoutube />
            </a>
         </div>   

<div className="signUpFather">
                      <Link className="signUp" to="signup">  <i><FaUserAlt/></i> </Link>
                      <Link className="signUp" to="login"><button>Log In</button></Link>


                    </div>    
                    
            <img id="img" className="logo" src="./img/Logo_lightmode.svg" alt="logo"></img> 
            
                
            </div>   
        </div>
        </div>
        
        

    )
}
export default Header;
