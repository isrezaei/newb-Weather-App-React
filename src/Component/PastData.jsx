import React from "react";

const DaysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function PastDate(props){

    const ForeCast = props.ForeCast.data.slice(1,8).map((Value , Index)=>{

        const Day = new Date(Value.datetime).getDay()

        return (
            <div key={Index} className={'ItemPast'}>

                <p className={'DayPast'}>{DaysInWeek[Day]}</p>

                <div className={'IconPast'}>
                    <img src={`https://www.weatherbit.io/static/img/icons/${Value.weather.icon}.png`}/>
                </div>

                <div className={'TempPast'}>
                    <p>{Math.round(Value.max_temp) + 4}°</p>
                    <p>{Math.round(Value.min_temp)}°</p>
                </div>
            </div>
        )
    })




    return(
        <div className={'ParentPast'}>
            <div className={'Past'}>
                {ForeCast}
            </div>
            <button onClick={function (){return props.GoToUpWeatherBody()}}>
                <img src="https://img.icons8.com/color/48/000000/double-down--v2.png"/>
            </button>
        </div>
    )
}