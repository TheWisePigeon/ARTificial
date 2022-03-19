import React from "react"

function Artwork(props) {

    return (
        <div className=" w-1/6 overflow-hidden text-center font-semibold">
            <img src={props.src} alt={props.alt} />

            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )

}
export default Artwork