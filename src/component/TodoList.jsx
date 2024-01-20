import { useRecoilState, useRecoilValue } from 'recoil';
import { todosAtom, filterTodosAtom } from '../atom/todos';


const TodoLists = ()=>{
  const filterTodos = useRecoilValue(filterTodosAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);
  return (
    <div>
      {
         filterTodos.map((todo, index)=>{
          return (
            <div key={index}>
              <input value={todo.todoText} type='text'></input>
              <span>&nbsp;</span>
              <input type="checkbox" checked={todo.completed} onChange={()=>{
                const newTodos = [...todos];
                newTodos[index] = {...newTodos[index],completed: !newTodos[index].completed};
                setTodos(newTodos);
              }}></input>
              <span>&nbsp;</span>
              <button onClick={()=>{
                setTodos(todos=>{
                  console.log(index);
                  const newTodos = [...todos];
                  newTodos.splice(index,1);
                  return newTodos;
                })
              }}>X</button>
          </div>
          )
        })
      }
    </div>
  )
}

export default TodoLists;