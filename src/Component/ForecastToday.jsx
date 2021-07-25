import React from "react";
import ShowForcast from "./ShowForcast";

export default function ForecastToday (props){

    const {forecast:{forecastday}} = props.ApiData

    return (
        <div ref={props.Ref} className={'BodyForecast'}>

            <div className={'BackToWeatherBody'}>
                <p>Forecast Tody</p>
                <button onClick={()=> props.BackToWeatherBody()}>
                    <img src="https://img.icons8.com/color/48/000000/double-up--v2.png"/>
                </button>
            </div>

            {
                forecastday[0].hour.map((Data , Index)=>{
                    return(
                            <ShowForcast value={Data} key={Index}/>
                    )
                })
            }
        </div>
    )
}