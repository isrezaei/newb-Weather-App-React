import React from "react";

export default function PastDate(props){
    return (
        <>
            <div className={'Past'}></div>
            <button onClick={function (){return props.GoToUpWeatherBody()}}>UP</button>

        </>

    )
}