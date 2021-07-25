import React ,{Component} from 'react'


export default class Header extends Component{
    constructor() {
        super()

        this.state ={
            Time :  new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
            Day : new Date().getDay()
        }
    }

    componentDidMount() {
        setInterval(()=> this.setState({
            Time :  new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
            Day : new Date().getDay()
        }),1000)
    }


    render() {

        const DaysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const {location:{country , name}} =this.props.Data

        return (
            <div className={'Headersearch'}>
                <div className={'NameCityTime'}>
                    <div className={'City'}>{name}</div>
                    <div className={'Time'}>{DaysInWeek[this.state.Day]} , {this.state.Time}</div>
                </div>

                <div>
                    <div onClick={()=> this.props.SearchAlert()} className={'Search'}>
                        <img src="https://img.icons8.com/color/96/000000/search--v1.png"/>
                    </div>
                </div>


            </div>
        )

    }

}