import React , {Component} from "react";

export default class SearchArea extends Component{
    constructor(props) {
        super(props);

        this.state={
            Input : 'Search ...' ,
        }
    }

    RemoveFirstTextInput = () =>{
        this.setState({
            Input : ''
        })
    }

    HandelChange = (event) => {
        this.setState({
            Input : event.target.value
        })
    }

    SearchButton = () =>{
        if (this.state.Input !== ''){
            this.props.UserCityChose(this.state.Input)
        }
    }

    render() {

        return (
            <div ref={this.props.RefSearch} className={'SearchAlert'}>
                <div onClick={()=> this.props.CloseSearch()} className={'Close'}>
                    <img src="https://img.icons8.com/color/48/000000/undo.png"/>
                </div>
                <p>Enter Your City</p>
                <input spellCheck={false} onClick={this.RemoveFirstTextInput} onChange={this.HandelChange} value={this.state.Input}/>
                <div onClick={this.SearchButton}>
                    <img src='../Icon/icons8-search%20(1).gif'/>
                </div>
            </div>
        )
    }
}