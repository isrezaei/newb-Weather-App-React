import React from "react";
import ShowForcast from "./ShowForcast";

export default function ForecastToday (props){

    const {forecast:{forecastday}} = props.ApiData

    return (
        <div ref={props.Ref} className={'BodyForecast'}>

            <div className={'BackToWeatherBody'}>
                <p>Forecast Tody</p>
                <button onClick={()=> props.BackToWeatherBody()}>
                    <img src='../../Icon/icons8-double-up.gif'/>
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