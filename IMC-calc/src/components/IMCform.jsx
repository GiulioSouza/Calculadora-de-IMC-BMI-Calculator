import React, { useState } from 'react'
import "./IMCform.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IMCform = ({setIsVisible, height, setHeight, weight, setWeight, imc, setIMC}) => {

    const calculateIMC = (height, weight) => {

        const BMIvalue = (Number(weight) / (Number(height) * Number(height))).toFixed(2)

        setIMC(BMIvalue)

        if(height === "" || weight === "") {
            toast.error("It's necessary fullfil height and weight fields")
            return
        } else if (isNaN(BMIvalue)) {
            if(isNaN(BMIvalue)){
                console.log(BMIvalue);
                toast.error("only numbers are allowed")
                return
            }
        } else {
            setIsVisible(false)
        }

    }

    const cleanInputValues = () => {
        const formContainer = document.querySelector(".form-container")
        formContainer.reset()
    }

  return (
    <div className="main">

        <form className="form-container" >
        <h1>BMI Calculator</h1>
            <div className="inputData">
                <label htmlFor="height">Height: </label>
                <input type="text" name="height" placeholder="Example: 1.75" 
                onChange={(event) => {
                    setHeight((event.target.value.replace(",", ".")))
                }}/>
            </div>

            <div className="inputData">
                <label htmlFor="weight">Weight: </label>
                <input type="text" name="weight" placeholder="Example: 70.5" 
                onChange={(event) => {
                    setWeight((event.target.value.replace(",", ".")))
                }}/>
            </div>

            <div className="buttons">
                <input type="submit" value="CALCULATE" className='calculate' 
                onClick={(event) => {
                    event.preventDefault()
                    calculateIMC(height, weight)
                }}/>
                <input type="submit" value="CLEAN VALUES" className="input-btn clean-values" onClick={(event) => {
                    event.preventDefault()
                    cleanInputValues()
                }}/>
            </div>
        </form>

    </div>
  )
}

export default IMCform