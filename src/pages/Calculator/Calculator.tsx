
import { useState } from "react"
import "./calculator.css"


const Calculator: React.FC = () => {
    const [ourText, setOurText] = useState("")
    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        let action = e.currentTarget.getAttribute("data-value")
        switch (action) {
            case "AC":
                setOurText("")
                break
            case "=":
                setOurText((prev) => eval(prev).toString())
                console.log(Number(ourText))
                break
            case "DEL":
                setOurText((prev) => prev.slice(0, prev.length - 1))
                break
            default:
                setOurText((prev) => prev + action)

        }


    }
    return (
        <div className="calculator_container">
            <input type="text" className="display" value={ourText} />
            <div className="buttons">
                <button className="operator" data-value="AC" onClick={handleChange}>AC</button>
                <button className="operator" data-value="DEL" onClick={handleChange}>DEL</button>
                <button className="operator" data-value="%" onClick={handleChange}>%</button>
                <button className="operator" data-value="/" onClick={handleChange}>/</button>
                <button data-value="7" onClick={handleChange}>7</button>
                <button data-value="8" onClick={handleChange}>8</button>
                <button data-value="9" onClick={handleChange}>9</button>
                <button className="operator" data-value="*" onClick={handleChange}>*</button>
                <button data-value="4" onClick={handleChange}>4</button>
                <button data-value="5" onClick={handleChange}>5</button>
                <button data-value="6" onClick={handleChange}>6</button>
                <button className="operator" data-value="-" onClick={handleChange}>-</button>
                <button data-value="1" onClick={handleChange}>1</button>
                <button data-value="2" onClick={handleChange}>2</button>
                <button data-value="3" onClick={handleChange}>3</button>
                <button className="operator" data-value="+" onClick={handleChange}>+</button>
                <button data-value="0" onClick={handleChange}>0</button>
                <button data-value="00" onClick={handleChange}>00</button>
                <button data-value="." onClick={handleChange}>.</button>
                <button className="operator" data-value="=" onClick={handleChange}>=</button>
            </div>
        </div>
    )
}

export default Calculator