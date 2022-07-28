import './App.scss';
import Title from "./Components/Title/Title"
import InputBar from './Components/InputBar/InputBar';
import List from './Components/List/List';

const App = () => {
  return (
    <div className='Application'>
      <Title/>
      <InputBar/>
      <List PlaceholderText = "In order to be productive, you might wanna set some tasks. Right? That's why you're here, to make a To-Do list. What other reason is there?"/>
    </div>
  )
}

export default App;
