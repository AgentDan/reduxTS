import {TypeTasks} from "./ToDoList";
import {ChangeEvent, FC, JSX, useState} from "react";
import {v1} from "uuid"
import Button from "./Button";

type TypePropsTasks = {
    arr: Array<TypeTasks>;
    removeTask: (taskId: string) => void;
    updateTaskCheck: (taskId: string, check: boolean) => void;
}
type TypeFilter = "all" | "active" | "completed"

const Tasks: FC<TypePropsTasks> = ({arr, removeTask, updateTaskCheck}) => {

    const [filter, setFilter]: TypeFilter = useState('all')

    const filterTaskList = filter === "completed"
        ? arr.filter((t) => (!t.check))
        : filter === "active" ? arr.filter((t) => (t.check))
            : arr

    const comp: JSX.Element = filterTaskList.length !== 0
        ? <ul>
            {
                filterTaskList.map((t) => {
                    const del = () => removeTask(t.id);
                    const onChangeSetStatus =
                        (e:ChangeEvent<HTMLInputElement>) => updateTaskCheck(t.id, e.currentTarget.checked)
                    return (
                        <li key={v1()}>
                            <input
                                type="checkbox"
                                checked={t.check}
                                onChange={onChangeSetStatus}/>
                            <span>{t.task}</span>
                            <Button name={"X"} onClickHandler={del} disabledButton={false}/>
                        </li>
                    )
                })
            }
        </ul>
        :
        <span style={{color: "red"}}>Your task list empty.</span>

    return (
        <div>
            <div>
                {comp}
            </div>
            <div>
                <Button name={"All"} onClickHandler={() => {
                    setFilter("all")
                }} disabledButton={false}/>
                <Button name={"Active"} onClickHandler={() => {
                    setFilter("active")
                }} disabledButton={false}/>
                <Button name={"Completed"} onClickHandler={() => {
                    setFilter("completed")
                }} disabledButton={false}/>
            </div>
        </div>
    )
}

export default Tasks