import "./ToDoContainer.scss";
import ToDo from "../../Components/ToDo/ToDo";

const ToDoContainer = ({ tasks, taskDeletion }) => {
    let taskCard = [];
    //adding index to increment through so that deletion works properly rather than just deleting the first
    let index = 0;

    tasks.forEach((item) => {
        taskCard.push(
            <ToDo value={item} taskDeletion={taskDeletion} key={index} index={index} />
        );
        index++;
    });

    return taskCard;
};

export default ToDoContainer;