import TodoInputControl from "./component/TodoInputControl";
import TodoLists from "./component/TodoList";
import TodoStats from "./component/TodoStats";

function App() {
  return (
    <div className='main-container'>
        <TodoStats />
        <TodoInputControl /> 
        <TodoLists />       
    </div>
  )
}

export default App;