import './App.css'
import ToDoList, {TypeTasks} from "./components/ToDoList";
import {v1} from "uuid"
import {useState} from "react";

function App() {
    const [arr, setArr]: TypeTasks = useState([
        {id: v1(), task: "asdflksdfj", check: true},
        {id: v1(), task: "DLFGK;NKNDK", check: false},
        {id: v1(), task: "a343464634634j", check: true},
    ])

    const removeTask = (taskId: string) => {
        const newTaskList: Array<TypeTasks> = []
        arr.map((t) => {t.id !== taskId ? newTaskList.push(t) : ""})
        setArr(newTaskList)
    }

    const addTask = (newTask: string) => {
        setArr([{id: v1(), task: newTask, check: false},...arr])
    }

    const updateTaskCheck = (taskId: string, check: boolean) => {
        setArr(arr.map(t => t.id === taskId ? {...t, check} : t))
    }

    return (
        <div className="App">
            <ToDoList title="My first title" arr={arr} removeTask={removeTask} addTask={addTask} updateTaskCheck={updateTaskCheck}/>
        </div>
    )
}

export default App
