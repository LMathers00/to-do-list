import "./ToDo.scss";

const ToDo = ({ value, taskDeletion, index }) => {

    const handleDeletion = () => {
        taskDeletion(index);
    };
    return (
        <div className="tasks">
            <input className="tasks__check" type="checkbox"/>
            <button className="tasks__delete" onClick={handleDeletion}>DELETE</button>
            <p className="tasks__title">{value}</p>
        </div>
    );
};

export default ToDo;
