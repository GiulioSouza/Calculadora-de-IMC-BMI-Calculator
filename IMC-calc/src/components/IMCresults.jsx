import React, { useState, useEffect  } from 'react'
import "./IMCresults.css"

const IMCresults = ({setIsVisible, imc, setHeight, setWeight, setIMC}) => {

    const [msgColor, setMsgColor] = useState("")
    const [bmiLabel, setBmiLabel] = useState("");

    const getBMIlabel = () => {
        if(imc < 18.5){
            setMsgColor("thinnes")
            return "Thinnes"
        } else if (imc >= 18.5 && imc < 24.9) {
            setMsgColor("normal")
            return " Normal"
        } else if (imc >= 25 && imc < 29.9) {
            setMsgColor("overweight")
            return " Overweight"
        } else if (imc >= 30 && imc < 34.9) {
            setMsgColor("overweight")
            return " Obese Class I"
        } else if (imc >= 35 && imc < 39.9) {
            setMsgColor("overweight")
            return " Obese Class II"
        } else if (imc >= 40) {
            setMsgColor("overweight")
            return " Obese Class III"
        }
    }

    useEffect(() => {
        const label = getBMIlabel();
        setBmiLabel(label);
    }, [imc])

  return (
    <div className="main">
        <div className="Results">
            <h2 className="imc-title">Your IMC is: <span className={`imc-info ${msgColor}`}>{imc}</span></h2>
            <h3>Situation:  
                <span className={`imc-info ${msgColor}`}>
                    {bmiLabel}
                </span>
            </h3>
            <h3>Check the classifications</h3>

            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classification</th>
                        <th>Obesity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >18.5</td>
                        <td>Mild Thinness</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>18.5 - 24.9</td>
                        <td>Normal</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>25 - 29.9</td>
                        <td>Overweight</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>30 - 34.9</td>
                        <td>Obese Class I</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>35 - 39.9</td>
                        <td>Obese Class II</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td> 40</td>
                        <td>Obese Class III</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>

            <input type="submit" value="BACK" onClick={() => {
                setIsVisible(true)
                setHeight("")
                setWeight("")
                setIMC("")
            }}/>
        </div>
    </div>
  )
}

export default IMCresults