import React from "react"

function Artwork(props) {

    return (
        <div className=" m-5">
            <div className=" w-40 h-40 rounded-full ">
                <img  src={props.src} alt={props.alt} />
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
    
}
export default Artwork