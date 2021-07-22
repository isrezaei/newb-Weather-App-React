import React from "react";

export default function ShowForcast (props){

    const {time , condition:{icon} , temp_c} = props.value


    return(
        <div className={'ForecastToday'}>

            <div className={'Time'}>
                <p>{time.slice(10 , 16)}</p>
            </div>

            <div className={'Icon'}>
              <img src={icon}/>
            </div>
            <div className={'Temp'}>
                <p>{Math.round(temp_c)}°C</p>
            </div>
        </div>
    )
}






