import React, { useState, useEffect} from 'react'

import axios from 'axios';

const url = "https://api.openweathermap.org/data/2.5/weather?"
const myKey = "955d5816126e27de4854ea8519edc403"
const icon = "https://openweathermap.org/img/w/"

function Weather(){

    const [weatherData, setWeatherData] = useState(null)
    const [change, SetChange] = useState(false)

    function getData() {
    
        axios.get(`${url}units=metric&q=Moscow, RU&appid=${myKey}`)
                .then(data => {
                    setWeatherData(data)
                    console.log(data);
                })
                .catch(error => console.log('error:', error));
    }
    
    useEffect(() => {
        getData()
        SetChange(false)
    }, [change])

    // function handlerData(){
    //     getData()
    //     console.log(weatherData);
    // }

    return(
        <div>
                <div className="row weather-info p-2 rounded">
                    <div className="col-8">
                        <b>Температура { weatherData ? weatherData["data"]["main"]["temp"] : null}&deg;</b><br/>
                        <b>Город { weatherData ? weatherData["data"]["name"] : null}</b>
                    </div>
                    <div className="col-2 offset-1">
                        { weatherData ? 
                            <img 
                                src={`${icon}${weatherData["data"]["weather"][0]["icon"]}.png`}
                                alt="Иконка погоды"
                                /> : 
                        null }
                    </div>
                </div>
        </div>
        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="col-3 row weather-info p-2 rounded">
        //             <div className="col-8 ml-1">
        //             </div>
        //             <div className="col-2 offset-1 mr-1">

        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Weather;