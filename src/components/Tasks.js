import Task from './Task'

const Tasks = ({tasks, onDelete}) => {

    // const tasks = [
    //     {
    //         id: 1,
    //         text: "Doctor's appointment",
    //         day: "Tomorrow",
    //         reminder: true
    //     },
    //     {
    //         id: 2,
    //         text: "Buy groceries",
    //         day: "Today",
    //         reminder: true
    //     },
    //     {
    //         id: 3,
    //         text: "Play FIFA",
    //         day: "Yesterday",
    //         reminder: false
    //     }
    // ]


    return (
        <div className="bvb">
            {tasks.map((task) => (
                <Task key={task.id} task ={task} onDelete={onDelete} />
            ))}   



        </div>
    )
}

export default Tasks
