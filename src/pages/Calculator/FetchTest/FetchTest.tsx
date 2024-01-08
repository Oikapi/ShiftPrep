import { useState } from "react";




const FetchTest = () => {
    interface Todo {
        userId: number,
        id: number,
        title: string,
        completed: boolean,
    }
    const [ourJson, setOurJson] = useState<Todo[] | null>();
    const [isOpen, setOpen] = useState(false);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => { setOurJson(json); console.log(json) }).then(() => setOpen(true))
    }

    const logTodo = (item: Todo) => {
        console.log(item)
        return (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>ID: {item.id}</p>
                <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
            </div>
        );
    }

    return (
        <div>
            <button onClick={getData}>Получить данные</button>
            {isOpen && ourJson && (
                <div>
                    {isOpen && ourJson && ourJson.map((item) => logTodo(item))}
                </div>
            )}
        </div>
    )
}


export default FetchTest