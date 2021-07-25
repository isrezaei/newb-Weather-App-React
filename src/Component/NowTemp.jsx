import React , {Component} from 'react'

let Colors = ['#ffcdd2' , '#e1bee7' , '#c5cae9' , '#b3e5fc' , '#e2c6c7' , '#ffab91' , '#80cbc4' , '#a0b7e5' , '#89d9c0' , '#88f3ba' , '#f5a0a0' , '#b1d27d']

export default class NowTemp extends Component{
    constructor(props) {
        super(props);

        this.state = {
            TempData : null,
            Counter : 0
        }
    }

    componentDidMount() {
        setInterval(function (){
            this.setState((state) =>{
                return{
                    Counter : state.Counter < 11 ? state.Counter + 1 : state.Counter = 0
                }
            })


        }.bind(this),1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.Counter !== this.state.Counter){
            this.props.RefColorTempInfo.current.style.background = `${Colors[this.state.Counter]}`
        }
    }


    render() {
        const { current , current:{condition}} = this.props.Data
        return (
            <div ref={this.props.RefColorTempInfo} className={'TempInfo'}>

                <div className={'IconeTemp'}>
                    <div className={'Info'}>
                        <p>{current.temp_c}°C</p>
                        <p>{condition.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}