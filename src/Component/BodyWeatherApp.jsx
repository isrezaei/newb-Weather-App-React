import React from "react";
import Header from "./Header";
import NowTemp from "./NowTemp";
import NowConditon from "./NowConditon";
import PastDate from "./PastData";

export default function BodyWeatherApp(props){
    return (
        <div ref={props.Ref} className={'BodyWeatherApp'}>
                <Header Data={props.ApiData} SearchArea={props.SearchArea}/>
                <NowTemp Data={props.ApiData} TempIcon={props.NowTemp} RefColorTempInfo={props.RefColorTempInfo}/>
                <NowConditon Data={props.ApiData}/>
                <PastDate GoToUpWeatherBody={props.GoToUpWeatherBody} ForeCast={props.ForeCast}/>
        </div>
    )
}