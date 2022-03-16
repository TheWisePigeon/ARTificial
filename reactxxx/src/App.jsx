import Header from './components/Header'
import Footer from './components/Footer'
import Artwork from './components/Artwork'

function App() {

  return (
    <div>
      <Header />
      <Artwork src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKArlMzyX01_ZjRpDgDqueaCBqMLYWKQDXg&usqp=CAU" alt="bruh" title="DANK MEME" description="Just a random meme" />
      <Footer />
    </div>


  )
}

export default App
