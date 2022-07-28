import "./ToDo.scss";

const ToDo = ({ value, taskDeletion, index }) => {

    const handleDeletion = () => {
        taskDeletion(index);
    };
    return (
        <div className="tasks">
            <input className="tasks__check" type="checkbox"/>
            <p className="tasks__title">{value}</p>
            <button className="tasks__delete" onClick={handleDeletion}>DELETE</button>
        </div>
    );
};

export default ToDo;
