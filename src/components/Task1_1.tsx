import { useState } from "react";



const Task1_1: React.FC = () => {
    const [popUpInfo, changePopInfo] = useState({ isopen: false, text: "" });
    const [inputNumber, setInputNumber] = useState(" ")


    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const numericValue: number = parseFloat(inputNumber);
        if (!isNaN(numericValue) && isFinite(numericValue)) {
            if (numericValue >= 0) {
                changePopInfo({ isopen: true, text: "Число положительное" })
            }
            else {
                changePopInfo({ isopen: true, text: "Число отрицательное" })
            }
        } else {
            changePopInfo({ isopen: true, text: "Это не число" })
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(e.target.value)

    }
    return (
        <div>
            <h2>Задание 1.1</h2>
            <p>Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Введите число сюда" onChange={handleChange} />
            </form>
            {popUpInfo.isopen && (
                <div className="popup">
                    <p>{popUpInfo.text}</p>
                    <button onClick={() => changePopInfo({ isopen: false, text: "" })}>Закрыть окно</button>
                </div>
            )}


        </div>
    )
}

export default Task1_1