import React, {Component, createRef} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../Css/MianBody.css'
import Loader from "react-loader-spinner";
import GetData from "../Server/ServerApi";
import ForeCast from "../Server/ForeCast";
import ForecastToday from "./ForecastToday";
import BodyWeatherApp from "./BodyWeatherApp";
import SearchArea from "./SearchArea";
import NotFound from "./NotFound";


export default class Master extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Data : null ,
            ForeCast : null,
            prevProps : '',
            UserChose :'Tehran',
            LatLong : {lat : '35.73',  lon : '51.33'},

        }

        this.ForecastToday = React.createRef()
        this.BodyWeatherApp = React.createRef()
        this.Search = React.createRef()
        this.ColorTempInfo = React.createRef()

    }


    //PrevState And NextState

    static getDerivedStateFromProps(nextprops , prevstate){
        if (prevstate.UserChose !== prevstate.prevProps){
            return{
                prevProps : prevstate.UserChose, // PrevState
                Data : null ,
                ForeCast : null,

            }
        }
        return null
    }

    componentDidMount(){
        setInterval(()=>{
        GetData(this.state.UserChose).then(Data => this.setState({Data}))
        },3000)
        ForeCast(this.state.LatLong).then(ForeCast => this.setState({ForeCast}))
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

    SearchArea = () =>{
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
        if (this.state.Data !== 400){
            return (

                <div className={'ParentWeather'}>
                    <>
                        {this.state.Data && this.state.ForeCast ?

                            <>
                                <ForecastToday Ref={this.ForecastToday}
                                               ApiData={this.state.Data}
                                               BackToWeatherBody={this.BackToWeatherBody}/>

                                <BodyWeatherApp Ref={this.BodyWeatherApp}
                                                RefColorTempInfo={this.ColorTempInfo}
                                                ApiData={this.state.Data}
                                                ForeCast={this.state.ForeCast}
                                                GoToUpWeatherBody={this.GoToWeatherBody}
                                                SearchArea={this.SearchArea}/>

                                <SearchArea RefSearch={this.Search}
                                             CloseSearch={this.CloseSearch}
                                             UserCityChose={this.UserCityChose}
                                             Data={this.state.Data}/>
                            </> :

                            <div className={'Spinner'}>
                                <Loader
                                    type="Bars"
                                    color="#e91e63"
                                    height={60}
                                    width={60}
                                />
                            </div>
                  }
                    </>
                </div>


            )
        }
        else {
            return <NotFound UserChose={this.state.UserChose}/>
        }
    }
}

//DOMContentLoaded