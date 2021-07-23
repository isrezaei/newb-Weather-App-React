import React , {Component} from 'react'

let Colors = ['#9eb877' , '#809f98' , '#b398e0' , '#b4de7f' , '#80b3ea' , '#a3d9c3']

export default class TempIcon extends Component{
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
                    Counter : state.Counter < 7 ? state.Counter + 1 : state.Counter = 0
                }
            })


        }.bind(this),600)


    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.Counter !== this.state.Counter){
            this.props.RefColorTempInfo.current.style.background = `${Colors[this.state.Counter]}`
        }
    }


    render() {

        console.log(this.state.Counter)

        const { current , current:{condition}} = this.props.Data

        return (
            <div ref={this.props.RefColorTempInfo} className={'TempInfo'}>

                <div className={'IconeTemp'}>

                    <div className={'Info'}>
                        <p>{current.temp_c}°C</p>
                        <p>{condition.text}</p>
                    </div>

                    {/*<div className={'Icone'}>*/}
                    {/*    <img src={condition.icon}/>*/}
                    {/*</div>*/}


                </div>
            </div>
        )
    }
}