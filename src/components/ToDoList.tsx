import Button from "./Button";
import {ChangeEvent, KeyboardEvent, FC, useState} from "react";
import Tasks from "./Tasks";

export type TypeTasks = {
    id: string;
    task: string;
    check: boolean;
}

type TypePropsToDoList = {
    title: string;
    arr: Array<TypeTasks>;
    removeTask: (taskId: string) => void;
    addTask: (newTask: string) => void;
    updateTaskCheck: (taskId: string, newCheck: boolean) => void;
}

const ToDoList: FC<TypePropsToDoList> = ({title, arr, removeTask , addTask, updateTaskCheck}) => {
    const [newTask, setNewTask] = useState("")
    const taskLengthMax = newTask.length>=15

    const onChangeSetTask = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length<=15){
            setNewTask(e.currentTarget.value)
        }
    }

    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter"
        && Boolean(newTask)
        && newTask.length <15
        && onclickNewTask()
    }

    const onclickNewTask = () => {
        addTask(newTask);
        setNewTask("")
    }

    return(
        <div className="todolist">
            <h2>{title}</h2>
            <div>
                <input value={newTask} onChange={onChangeSetTask} onKeyDown={onKeyDownAddTask}/>
                <Button name={"+"} onClickHandler={onclickNewTask} disabledButton={!newTask || taskLengthMax}/>
            </div>
            <div>
                {taskLengthMax && <span style={{color: "red"}}>Task long</span>}
            </div>
            <div>
                <Tasks arr={arr} removeTask={removeTask} updateTaskCheck={updateTaskCheck}/>
            </div>
        </div>
    )
}

export default ToDoList