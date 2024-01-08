import { useState } from "react";



const Task1_6: React.FC = () => {
    const [inputString, setString] = useState("")
    const [popUpInfo, changePopInfo] = useState({ isopen: false, text: "" });

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        changePopInfo({ isopen: true, text: inputString[inputString.length - 1] === 'ь' ? inputString[inputString.length - 2] : inputString[inputString.length - 1] })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setString(e.target.value)
    }
    return (
        <div>
            <h2>Задание 1.6</h2>
            <p>Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstString" onChange={handleChange} placeholder="Введите строку" />
            </form>
            {popUpInfo.isopen && (
                <div className="popup">
                    <p>Последняя буква слова {popUpInfo.text}</p>
                    <button onClick={() => changePopInfo({ isopen: false, text: "" })}>Закрыть окно</button>
                </div>
            )}
        </div>
    )
}

export default Task1_6