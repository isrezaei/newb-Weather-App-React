import React from "react";
import HeaderSearch from "../2-HeaderSearch";
import TempIcon from "../3-Temp&Icon";
import ToDayData from "../4-ToDayData";
import PastDate from "../5-FooterPastInformation";

export default function BodyWeatherApp(props){
    return (
        <div ref={props.Ref} className={'BodyWeatherApp'}>
                <HeaderSearch Data={props.ApiData} SearchAlert={props.SearchAlert}/>
                <TempIcon Data={props.ApiData} TempIcon={props.TempIcon} RefColorTempInfo={props.RefColorTempInfo}/>
                <ToDayData Data={props.ApiData}/>
                <PastDate GoToUpWeatherBody={props.GoToUpWeatherBody} ForeCast={props.ForeCast}/>
        </div>
    )
}