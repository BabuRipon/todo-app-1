import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput,setTodoInput] = useState('');
  const [filterText, setFilterText] = useState('not-completed');

  const addTodoshandler = ()=>{
    if(todoInput){
      setTodos((todos)=>[...todos,{todoText: todoInput,completed:false}]);
      setTodoInput('')
    }
  }

  const filterTodos = useMemo(()=>{
    if(filterText === 'completed'){
      return todos.filter(todo=>todo.completed===true);
    }
    else if(filterText==='not-completed'){
      return todos.filter(todo=>todo.completed===false)
    }
    return todos;
  },[filterText])
  console.log(todos)
  return (
    <div className='main-container'>
        <h1>Recoil Example</h1>
        <h3>Learn recoill with simple todo list app</h3>
        <br></br>
        <ul>
          <li>Total items: {todos.length}</li>
          <li>Items completed: {todos.filter(todo=>todo.completed === true).length}</li>
          <li>Items not completed: {todos.filter(todo=>todo.completed === false).length}</li>
          <li> Percent completed: {
            todos.length ? 
            Math.floor(todos.filter(todo=>todo.completed === true).length/todos.length*100) : 0
            }%
          </li>
          <li>
            Text not completed:
            {todos.filter(todo=>todo.completed === false).map((todo,index)=>`${todo.todoText},`)}
          </li>
        </ul>
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
            onChange={e =>setFilterText(e.target.value)}
          >
            <option value="all">All</option>
            <option value="not-completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        {/* <div>
           {
            todos.filter((todo)=>{
              if(filterText=='completed')return todo.completed === true;
              if(filterText=='not-completed')return todo.completed === false;
              return true;
            }).map((todo,index)=>(
              <div key={index}>
                  <input value={todo.todoText} type='text'></input>
                  <span>&nbsp;</span>
                  <input type="checkbox" checked={todo.completed} onChange={()=>{
                    setTodos(todos=>{
                      const newTodos = [...todos];
                      newTodos[index].completed = true;
                      return newTodos;
                    })
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
            ))
           }
        </div> */}
        <div className='filterTodos'>
          {
            filterTodos.map((todo, index)=>{
              return (
                <div key={index}>
                  <input value={todo.todoText} type='text'></input>
                  <span>&nbsp;</span>
                  <input type="checkbox" checked={todo.completed} onChange={()=>{
                    setTodos(todos=>{
                      const newTodos = [...todos];
                      newTodos[index].completed = true;
                      return newTodos;
                    })
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
    </div>
  )
}

export default App;