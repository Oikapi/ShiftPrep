import { useState } from "react";



const Task1_4: React.FC = () => {
    const [popUpInfo, changePopInfo] = useState({ isopen: false, text: "" });
    const [inputNumber, setInputNumber] = useState(" ")

    const isNumber = (str: string): boolean => {
        return /^\d+$/.test(str);

    }
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isNumber(inputNumber)) {
            const numericValue: number = parseFloat(inputNumber);
            if (numericValue % 2 == 0) {
                changePopInfo({ isopen: true, text: "Число четное" })
            }
            else {
                changePopInfo({ isopen: true, text: "Число не четное" })
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
            <h2>Задание 1.4</h2>
            <p>Дано число. Проверьте, четное оно или нет.</p>
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

export default Task1_4