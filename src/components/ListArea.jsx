import Card from './ToDoCard.jsx';
import styles from './ListArea.module.css'

function ListArea({setNewToDo, todoArray, setToDoArray, filter, setFilter}){
    // console.log(todoArray)

    function handleEdit(id){
        console.log("Edit Id:",id)
        let tempToDo = todoArray.find(todo => todo.id == id)
        // console.log(todoArray);
        setNewToDo(tempToDo);
    }

    function handleDelete(id) {
        console.log("Delete Id: ",id)
        let toToArrayAfterDeletion = todoArray.filter((todo,index,array) => (
            todo.id !== id
        ))
        setToDoArray(toToArrayAfterDeletion)
    }

    function handleStatus(e,id) {
        console.log(`Statues Changed to ${e.target.value} for id ${id}`);
        let tempArray = [...todoArray];
        let index = tempArray.findIndex((todo)=>todo.id == id);
        tempArray[index].status = e.target.value;
        // console.log("Array",tempArray)
        setToDoArray(tempArray);
    }

    function handleFilter(e){
        setFilter(e.target.value)   
    }

    function filteredList(status){
        let tempArray =[]
        if(status == "all"){
            return (<>
                <div className={styles.listAreaContainer}>
                {todoArray.map((todo,idx, todoArray)=>(
                    <Card key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleStatus={handleStatus}/>
                ))}
                </div>
            </>)
        }else{
            tempArray = filterArray(status)
            return(<>
                <div className={styles.listAreaContainer}>
                {tempArray.map((todo,idx, todoArray)=>(
                    <Card key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleStatus={handleStatus}/>
                ))}
                </div>
            </>)
        }
    }

    function filterArray(status){
        let array = todoArray.filter((todo) => todo.status === status)
        return array
    }

    return(
    <>
        <div className={styles.statusContainer}>
            <div>
            <p>Filter</p>
            <select class="form-select" onChange={handleFilter} name="selectStatus">
                <option value="all">All</option>
                <option value="not-completed">Not Completed</option>
                <option value="completed">Completed</option>
            </select>

            </div>
            
            
        </div>
        {console.log(filter)}
        
        {filteredList(filter)}
        
        
{/* 
        <div className={styles.listAreaContainer}>
        {todoArray.map((todo,idx, todoArray)=>(
            <Card key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleStatus={handleStatus}/>
        ))}
        </div> */}
    </>
    )
}

export default ListArea