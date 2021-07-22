import React from "react";
import HeaderSearch from "../2-HeaderSearch";
import TempIcon from "../3-Temp&Icon";
import ToDayData from "../4-ToDayData";
import PastDate from "../5-FooterPastInformation";

export default function BodyWeatherApp(props){
    return (
        <div ref={props.Ref} className={'BodyWeatherApp'}>
                <HeaderSearch Data={props.ApiData}/>
                <TempIcon Data={props.ApiData}/>
                <ToDayData Data={props.ApiData}/>
                <PastDate GoToUpWeatherBody={props.GoToUpWeatherBody}/>
        </div>
    )
}