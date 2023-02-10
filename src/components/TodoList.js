import Todo from "./Todo";

const TodoList = ({todoList, setTodoList}) =>{
    return(
        <div>
            {todoList.map((todoItem)=>(
                <Todo key={todoItem.id} name={todoItem.name} id={todoItem.id} setTodoList={setTodoList}></Todo>
            ))}
        </div>
    );
};

export default TodoList;