import { useState } from 'react'
import './App.css'
import IMCform from './components/IMCform'
import IMCresults from './components/IMCresults'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [isVisible, setIsVisible] = useState(true)
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [imc, setIMC] = useState("")

  return (
    <div className="App">
      {isVisible ? <IMCform 
      setIsVisible={setIsVisible} 
      height={height} 
      setHeight={setHeight} 
      weight={weight} 
      setWeight={setWeight}
      imc={imc}
      setIMC={setIMC}/> 
      :
      <IMCresults 
      setHeight={setHeight} 
      setWeight={setWeight}
      imc={imc}
      setIMC={setIMC}
      setIsVisible={setIsVisible}
      />}

    <ToastContainer />
    </div>
    
  )
}

export default App
