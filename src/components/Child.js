import React,{useState} from "react";

function Child({state,func}) {  

    

    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={()=>func(true)}>Show Modal</button>
            {
               state  && (<div className="modal">
                                <h3>Modal Component</h3>
                                <p>This is modal content</p>
                            </div>) 
            }

            
        </div>
    )
}

export default Child;