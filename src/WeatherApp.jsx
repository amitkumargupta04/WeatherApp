import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Lucknow",
        feelsLike: 43.74,
        grndLevel: 984,
        humidity: 44,
        pressure: 998,
        temp: 37.55,
        temMax: 37.35,
        tempMin: 37.35,
        weather: "broken clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Building a Weather Widget</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}