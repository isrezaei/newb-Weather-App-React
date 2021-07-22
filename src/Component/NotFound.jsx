import React from 'react'

export default function NotFound(props){
    return(
        <div className={"NotFound"}>

            <div className={'Image404'}>
                <img src='../Icon/404-Error.gif'/>
            </div>

            <div className={'Text404'}>
                <p>We could not find <b>{props.UserChose}</b></p>
                <button onClick={()=> window.location.reload()}>
                    <img src='../Icon/Reload.gif'/>
                </button>
            </div>


        </div>
    )
}