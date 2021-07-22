import React , {Component} from 'react'

export default class TempIcon extends Component{
    constructor(props) {
        super(props);

        this.state = {
            TempData : null
        }

    }



    render() {
        const { current , current:{condition}} = this.props.Data



        return (
            <div className={'TempInfo'}>

             <div className={'IconeTemp'}>




                 <div className={'Info'}>
                     <p>{current.temp_c}°</p>
                     <p>{condition.text}</p>
                 </div>


                 <div className={'Icone'}>
                     <img src={condition.icon}/>
                 </div>


             </div>

            </div>
        )
    }

}