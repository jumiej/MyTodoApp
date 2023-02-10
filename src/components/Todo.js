import styles from "./style.module.css"

const Todo = ({name, setTodoList, id}) => {
    const markAsDone = () => {
       setTodoList((currentTodo)=>currentTodo.filter((item)=>item.id !== id))
    }
    return(
        <div>
            <div className={styles.todoitem}> 
                <h3 className={styles.todoname}>{name}</h3>
                <button className={styles.deletebutton} onClick={markAsDone}>Done</button>
            </div>
        </div>
    );
};

export default Todo;


















// import { useState } from "react"
// import ListItem from "./ListItem";

// export default function Todo(){
//     const[todo, setTodo] = useState("");
//     const[todoList, setTodoList] = useState([]);

//     const handleChange = (event) =>{
//         setTodo(event.target.value);
//         // console.log(todo);
//     };

//     const handleSubmit = (event ) =>{
//         event.preventDefault();
//         let tempList = todoList;
//         tempList.push(todo);
//         setTodoList(tempList);
//         console.log(todoList);
//         setTodo("");
//     };
//     return (
//     <div>
//         <form onSubmit={handleSubmit} >
//             <input value={todo} onChange={handleChange} type="text"></input>
//             <button type="submit">Add</button>
//         </form>
//         {todoList.map((item) =>(
//             <ListItem key={item} name={item}> 
//             </ListItem>
//         ))}
//     </div>

//     );
// }
