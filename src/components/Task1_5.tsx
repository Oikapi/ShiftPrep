import { useState } from "react";



const Task1_5: React.FC = () => {
    const [inputStrings, setString] = useState({ firstString: "", secondString: "" })
    const [popUpInfo, changePopInfo] = useState({ isopen: false, text: "" });

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("hello")
        if (inputStrings.firstString[0] === inputStrings.secondString[0]) {
            changePopInfo({ isopen: true, text: "Первые символы строк равны" })
        } else {
            changePopInfo({ isopen: true, text: "Первые символы строк не равны" })
        }
        // changePopInfo({ isopen: true, text: inputString.length.toString() })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setString((prevInputStrings) => ({
            ...prevInputStrings,
            [name]: value,
        }));

        console.log(name, value)


    }
    return (
        <div>
            <h2>Задание 1.5</h2>
            <p>Даны два слова. Проверьте, что первые буквы этих слов совпадают.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstString" onChange={handleChange} placeholder="Введите первую строку" />
                <input type="text" name="secondString" onChange={handleChange} placeholder="Введите вторую строку" />
                <button type="submit">Проверить</button>
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

export default Task1_5