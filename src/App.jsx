import "./App.css";
import Title from "./Components/Title/Title"
import ToDoContainer from "./Components/ToDoContainer/ToDoContainer";
import Input from "./Components/Input/Input";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };
//need to add typed task to array
  const addTask = (tasks, input) => {
    let customTasks = [...tasks];
    customTasks.push(input);
    setTasks(customTasks);
    return customTasks;
    };

    if(input === ""){
        alert("Plz eneter a task")
      }
    

//Need to be able to delete tasks
  const deleteTask = (tasks, index) => {
    let customTasks = [...tasks];
    customTasks.splice(index, 1);
    setTasks(customTasks);
    return customTasks;
  };
//Updating list when array changes
  const updateTasks = () => {
    addTask(tasks, input);
  };

  const taskDeletion = (taskIndex) => {
    deleteTask(tasks, taskIndex);
  };

  return (
    <div className="App">
      <Title/>
      <Input value={input} handleInput={handleInput} addTask={addTask} updateTasks={updateTasks}/>
      <ToDoContainer tasks={tasks} taskDeletion={taskDeletion}/>
    </div>
  );
}

export default App;