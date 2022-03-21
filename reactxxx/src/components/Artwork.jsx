import React from "react"

function Artwork(props) {

    return (
        <div className=" w-1/4  mx-2 py-3   text-center font-semibold">
            <img src={props.src} className=" " alt={props.alt} />

            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )

}
export default Artwork