import React, {Component, createRef} from "react";
import '../Css/Weather.css'
import GetData from "../Server/ServerApi";
import ForeCast from "../Server/ForeCast";
import ForecastToday from "./Forecast/ForecastToday";
import BodyWeatherApp from "./Forecast/BodyWeatherApp";
import SearchAlert from "./SearchAlert";
import NotFound from "./NotFound";


export default class Master extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Data : null ,
            ForeCast : null,
            UserChose : 'Tehran',
            LatLong : {lat : '35.73',  lon : '51.33'}
        }

        this.ForecastToday = React.createRef()
        this.BodyWeatherApp = React.createRef()
        this.Search = React.createRef()
        this.ColorTempInfo = React.createRef()

    }

    componentDidMount(){
        // setInterval(()=>{

        GetData(this.state.UserChose).then(Data => this.setState({Data}))
        ForeCast(this.state.LatLong).then(ForeCast => this.setState({ForeCast}))

        // },1000)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.UserChose !== this.state.UserChose){

            GetData(this.state.UserChose).then(Data => this.setState({Data}))
            ForeCast(this.state.LatLong).then(ForeCast => this.setState({ForeCast}))

        }
        return null
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

    SearchAlert = () =>{
        return (
            this.Search.current.style.zIndex ='1',
                this.Search.current.style.opacity ='1'
        )

    }

    UserCityChose = (City) =>{
        this.setState({
            UserChose : City,
            LatLong : {lat : this.state.Data.location.lat , lon : this.state.Data.location.lon}
        })
            return(
                this.Search.current.style.zIndex ='-1',
                this.Search.current.style.opacity ='0'
            )

    }

    CloseSearch = () => {
        return (
            this.Search.current.style.zIndex ='-1',
                this.Search.current.style.opacity ='0'
        )
    }





    render() {

        {this.state.Data && console.log(this.state.Data.location)}

        {this.state.ForeCast && console.log(this.state.ForeCast.data.slice(1,8))}


        if (this.state.Data !== 400){
            return (
                <div className={'ParentWeather'}>
                    {this.state.Data &&
                    <ForecastToday Ref={this.ForecastToday}
                                   ApiData={this.state.Data}
                                   BackToWeatherBody={this.BackToWeatherBody}/>}

                    {this.state.Data &&
                    this.state.ForeCast &&
                    <BodyWeatherApp Ref={this.BodyWeatherApp}
                                    RefColorTempInfo={this.ColorTempInfo}
                                    ApiData={this.state.Data}
                                    ForeCast={this.state.ForeCast}
                                    GoToUpWeatherBody={this.GoToWeatherBody}
                                    SearchAlert={this.SearchAlert}/>}

                    <SearchAlert RefSearch={this.Search}
                                 CloseSearch={this.CloseSearch}
                                 UserCityChose={this.UserCityChose}
                                 Data={this.state.Data}/>
                </div>
            )
        }
        else {
          return <NotFound UserChose={this.state.UserChose}/>
        }
    }
}