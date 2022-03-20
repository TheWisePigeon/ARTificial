import React from "react";
import Artwork from "./Artwork";
import axios from 'axios'

axios.get('https://artificialbackend.herokuapp.com/arts').then((res)=>{
  console.log(res.data);
})

function Artworks() {

    function createArtwork(artworks) {
        artworks.map()
    }

    return (
        <div className=" flex flex-wrap overflow-hidden" >
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
        </div>
    )
}

export default Artworks