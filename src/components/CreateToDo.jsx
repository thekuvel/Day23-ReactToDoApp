import styles from './CreateToDo.module.css'
import { useState } from 'react';

function CreateToDo({newToDo, setNewToDo, todoArray, setToDoArray}){
    // console.log(todoArray);
    // const [newToDo, setNewToDo] = useState({});
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");

    let handleChange =(e) => {
        // console.log(e.target.name);
        setNewToDo({
            ...newToDo,
            [e.target.name] : e.target.value
        })
        
    }

    // function getTitle(e){
    //     // console.log(e.target.value);
    //     let value = e.target.value;
    //     setTitle(value)
    // }

    // function getDescription(e){
    //     // console.log(e.target.value);
    //     let value = e.target.value;
    //     setDescription(value)
    // }

    
    // Working Code
    function handleAdd(e){       
        e.preventDefault()
        if(newToDo.id){
            console.log("Already id exists");
            // console.log(newToDo)
            let index = todoArray.findIndex( todo => todo.id == newToDo.id)
            let tempArray = [...todoArray];
            tempArray[index] = newToDo;
            // console.log(tempArray);
            setToDoArray(tempArray)
             
            //clear form
            setNewToDo({})
            
        }else{
            let tempToDo = {...newToDo}
            tempToDo.id = Date.now()
            tempToDo.status = "not-completed"
            
            console.log("New",tempToDo)
            setToDoArray([...todoArray,tempToDo])
            
            setNewToDo({})

        }
        
    }

    // Not working getting an empty object
    // function handleAdd(e){       
    //     e.preventDefault()
        
    //     setNewToDo({
    //         ...newToDo,
    //         id : Date.now()
    //     })
        
    //     console.log("New",newToDo)
    //     setToDoArray([...todoArray,newToDo])
        
    //     setNewToDo({})
    // }

    return (
        <>
        <h3>To Do App</h3>
        <div className={styles.wrapper}>
            <form className={styles.todoForm} action="">
                
                <input className='form-control' onChange={handleChange} id='todoTitle' name="title" type="text" placeholder="Enter Title" value={newToDo.title || ""}/> 
                <input className='form-control' onChange={handleChange} id='todoDescription' name="description" type="text" placeholder="Enter Description" value={newToDo.description || ""}/> 
                <button className='btn btn-primary' onClick={handleAdd}>Add</button>
            
            </form>
        </div>
        </>
    )
}

export default CreateToDo