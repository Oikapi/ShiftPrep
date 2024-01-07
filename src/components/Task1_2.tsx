import { useState } from "react";



const Task1_2: React.FC = () => {
    const [inputString, setString] = useState("")
    const [popUpInfo, changePopInfo] = useState({ isopen: false, text: "" });

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        changePopInfo({ isopen: true, text: inputString.length.toString() })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setString(e.target.value)
    }
    return (
        <div>
            <h2>Задание 1.2</h2>
            <p>Дана строка. Выведите в консоль длину этой строки.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="ВВедите строку" />
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

export default Task1_2