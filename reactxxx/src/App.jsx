import { useState } from 'react'
import './App.css'
import './Styles.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Header/>
        <Footer/>
      </div>
      
      
  )
}

export default App
