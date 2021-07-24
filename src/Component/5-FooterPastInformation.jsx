import React from "react";



export default function PastDate(props){

    const ForeCast = props.ForeCast.data.map((Value , Index)=>{
        return <div className={'ItemPast'}>{Value.high_temp}</div>
    })


    return(
        <div className={'ParentPast'}>

            <div className={'Past'}>
                {ForeCast}
            </div>

            <button onClick={function (){return props.GoToUpWeatherBody()}}>UP</button>
        </div>
    )
}