import React, {Component, createRef} from "react";
import '../Css/Weather.css'
import GetData from "../Server/ServerApi";
import ForecastData from "../Server/ForecastApi";
import ForecastToday from "./Forecast/ForecastToday";
import BodyWeatherApp from "./Forecast/BodyWeatherApp";


export default class Master extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Data : null ,
            ForeCast : null,
        }

        this.ForecastToday = React.createRef()
        this.BodyWeatherApp = React.createRef()

    }


    componentDidMount(){
        // setInterval(()=>{
        GetData().then(Data => this.setState({Data}))
        ForecastData().then(ForeCast => this.setState({ForeCast}))


        // },1000)
    }

    GoToWeatherBody = () =>{
        return(
            this.BodyWeatherApp.current.style.transform ='translate(-50%, -150%)',
            this.ForecastToday.current.style.transform ='translate(-50%, -50%)'
        )
    }

    BackToWeatherBody = () => {
        return(
            this.BodyWeatherApp.current.style.transform ='translate(-50%, -50%)',
            this.ForecastToday.current.style.transform ='translate(-50%, 50%)'
       )
    }



    render() {

        {this.state.Data && console.log(this.state.Data)}
        {this.state.ForeCast && console.log(this.state.ForeCast)}


        return (



            <div className={'ParentWeather'}>

                {this.state.Data && <ForecastToday Ref={this.ForecastToday} ApiData={this.state.Data} BackToWeatherBody={this.BackToWeatherBody}/> }
                {this.state.Data && <BodyWeatherApp Ref={this.BodyWeatherApp} ApiData={this.state.Data} GoToUpWeatherBody={this.GoToWeatherBody}/>}

            </div>

        )
    }
}