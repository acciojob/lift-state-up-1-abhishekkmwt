import React,{useState} from "react";

function Child({showModal,setShowModal}) {  

    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={()=>setShowModal(true)}>Show Modal</button>
            {
               showModal && (<div className="modal">
                                <h3>Modal Component</h3>
                                <p>This is modal content</p>
                            </div>)
            }
            
        </div>
    )
}

export default Child;