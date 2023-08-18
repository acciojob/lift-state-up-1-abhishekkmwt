import React,{useState} from "react";

function Child({state,func}) {  

    function f(){
        if(state===false){
            func(true)
        }
        else{
            func(false)
        }
    }

    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={f}>Show Modal</button>
            {
               state===true && (<div className="modal">
                                <div className="modal-content">
                                    <h3>Modal Content</h3>
                                    <p>This is the modal content.</p>
                                </div>
                                </div>)
            }

            
        </div>
    )
}

export default Child;