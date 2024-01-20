import { useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtom, todoInputAtom, todoFilterTextAtom } from '../atom/todos';

const TodoInputControl = () => {
  const [todoInput, setTodoInput] = useRecoilState(todoInputAtom);
  const [filterText, setFilterText] = useRecoilState(todoFilterTextAtom);
  const setTodos = useSetRecoilState(todosAtom);

  const addTodoshandler = ()=>{
    if(todoInput){
      setTodos((todos)=>[...todos,{todoText: todoInput,completed:false}]);
      setTodoInput('')
    }
  }


  return (
    <div>
      <input
        type='text'
        placeholder='input todo'
        value={todoInput}
        onChange={(e)=>setTodoInput(e.target.value)}
      ></input>
      <button onClick={addTodoshandler}>Add</button>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>Filter: </span>
      <span>&nbsp;</span>
      <select
        name="todoFilter" 
        id="todo-filter"
        value={filterText}
        onChange={e =>{
          console.log('e.target.value =',e.target.value)
          setFilterText(e.target.value)
        }}
      >
        <option value="all">All</option>
        <option value="not-completed">Not Completed</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}

export default TodoInputControl;