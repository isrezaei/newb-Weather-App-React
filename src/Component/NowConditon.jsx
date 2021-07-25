import React from "react";

export default function NowConditon(props){

    const {forecast:{forecastday} , current} = props.Data

    return(
        <div>
            <div className={'ToDayData'}>

                <div className={'Temp'}>
                    <div>
                        <img src="../Icon/icons8-temperature.gif"/>
                    </div>
                    <p>{`${Math.round(forecastday[0].day.mintemp_c)}°`} | {`${Math.round(forecastday[0].day.maxtemp_c)}°`}</p>
                </div>

                <div className={'WindSpeed'}>
                    <img src='../Icon/icons8-windy-weather.gif'/>
                    <p>{current.wind_mph} Km/h</p>
                </div>

                <div className={'Rainy'}>
                    <div>
                        <img src="../Icon/icons8-rainfall.gif"/>
                    </div>
                    <p>{forecastday[0].day.daily_will_it_rain}%</p>
                </div>
            </div>

            <div className={'SunPosition'}>
                <div className={'Sunrise'}><p>Sunrise</p> <p>{forecastday[0].astro.sunrise}</p></div>
                <div className={'Sunset'}><p>Sunset</p> <p>{forecastday[0].astro.sunset}</p></div>
            </div>
        </div>

    )
}