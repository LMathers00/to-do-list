import "./Input.scss";

const Input = ({handleInput, updateTasks }) => {
    return (
        <div className="input">
            <input
                onInput={handleInput}
                type="text"
                className="input__textbox"
            />
            <button className="input__add-button" onClick={updateTasks}>Add</button>
        </div>
    );
};

export default Input;