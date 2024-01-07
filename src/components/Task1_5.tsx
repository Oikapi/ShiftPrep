import { useState } from "react";



const Task1_5: React.FC = () => {
    const [inputStrings, setString] = useState({ firstString: "", secondString: "" })
    const [popUpInfo, changePopInfo] = useState({ isopen: false, text: "" });

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        // changePopInfo({ isopen: true, text: inputString.length.toString() })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        // setString({name})
        console.log(name, value)


    }
    return (
        <div>
            <h2>Задание 1.2</h2>
            <p>Дана строка. Выведите в консоль длину этой строки.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstString" onChange={handleChange} placeholder="Введите первую строку" />
                <input type="text" name="secondString" onChange={handleChange} placeholder="Введите вторую строку" />
            </form>
            {popUpInfo.isopen && (
                <div className="popup">
                    <p>Длинна строки {popUpInfo.text}</p>
                    <button onClick={() => changePopInfo({ isopen: false, text: "" })}>Закрыть окно</button>
                </div>
            )}
        </div>
    )
}

export default Task1_5