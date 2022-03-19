import React from "react"

function Artwork(props) {

    return (
        <div className=" m-5 w-1/6 overflow-hidden">
            <img src={props.src} alt={props.alt} />

            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )

}
export default Artwork