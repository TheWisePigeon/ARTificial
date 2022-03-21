import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import Artwork from './components/Artwork'

const style = {

}
let content = await axios.get('https://artificialbackend.herokuapp.com/arts').then((res)=>{
  return(res.data);
})
console.log(content);

function App() {

  function createArtwork(artworks) {
    return(
        <Artwork src={artworks.src} key={artworks._id} title={artworks.title} description={artworks.desc}  />
    ) 
    
    
}

  return (
    <div>
      <Header />
      <div className="flex flex-wrap overflow-hidden" >
        {
          content.map(
            artwork => createArtwork(artwork)
          )
        }
      </div>
      <Footer />
    </div>


  )
}

export default App
