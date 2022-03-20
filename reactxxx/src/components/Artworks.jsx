import React from "react";
import Artwork from "./Artwork";
import axios from 'axios'

let content = await axios.get('https://artificialbackend.herokuapp.com/arts').then((res)=>{
  return(res.data);
})
console.log(content);

function Artworks() {

    function createArtwork(artworks) {
        return(
            <Artwork src={artworks.src} title={artworks.title} description={artworks.desc}  />
        ) 
        
        
    }

    return (
        <div className=" flex flex-wrap overflow-hidden" >
            {/* <Artwork title="test" description="Just a description" src="https://picsum.photos/200" />
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
            <Artwork title="test" description="Just a description" src="https://picsum.photos/200" /> */}
            {
                content.map(
                    artwork=> createArtwork(artwork)
                )
            }
        </div>
    )
}

export default Artworks