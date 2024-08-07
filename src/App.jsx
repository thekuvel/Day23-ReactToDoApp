import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importing Components
import CreateToDo from './components/CreateToDo.jsx'
import ListArea from './components/ListArea.jsx'

function App() {
  const [filter, setFilter] = useState("all");
  const [newToDo, setNewToDo] = useState({});
  const [todoArray, setToDoArray] = useState([]);

  return (
    <>
      <CreateToDo newToDo={newToDo} setNewToDo={setNewToDo} todoArray={todoArray} setToDoArray={setToDoArray}/>
      <ListArea setNewToDo={setNewToDo} todoArray={todoArray} setToDoArray={setToDoArray} filter={filter} setFilter={setFilter}/>
    </>
  )
}

export default App
