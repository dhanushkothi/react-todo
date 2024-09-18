import TodoCard from "./TodoCard"

export default function TodoList(props){
    let {todos, handleDeleteTodos} = props;
    
    return (
        <ul className="main">
            {todos.map((todo, todoIndex)=>{
                return (
                    <TodoCard key={todoIndex} index={todoIndex} {...props}>
                        <p>{todo}</p>
                    </TodoCard>
                        
                )
                
            })}
        </ul>
    )
}