import React from 'react'

export default function NotFound(props){
    return(
        <div className={"NotFound"}>

            <div className={'Image404'}>
                <img src='../Icon/404-Error.gif'/>
            </div>

            <div className={'Text404'}>

                <p>Oops ! We could not find </p>
                <b>{props.UserChose}</b>
                <button onClick={()=> window.location.reload()}>
                    <img src='../Icon/Reload.gif'/>
                </button>
            </div>


        </div>
    )
}