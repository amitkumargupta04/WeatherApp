
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "274cb2571a03357e6e56e75fd827ecf6";

    let getWheatherInfo = async() =>{
        try{
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        
        let result = {
            city: city,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            grndLevel: jsonResponse.main.grnd_level,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        } catch(err){
             throw err;
        }
    }

    let handleChange = (event) =>{
          setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWheatherInfo();
            updateInfo(newInfo)
        } catch(err){
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br> <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color: "red"}}>No such place exists</p>}
            </form>
        </div>
    )
}