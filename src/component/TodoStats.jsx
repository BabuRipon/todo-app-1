import { useRecoilValue } from 'recoil';
import { todosAtom, todoListStatsAtom } from '../atom/todos';

const TodoStats = () => {
  const todos = useRecoilValue(todosAtom);
  const {
    totalTodoCount,
    todoCompleted,
    todoNotCompleted,
    precentOfCompletedTodo,
  } = useRecoilValue(todoListStatsAtom);

  return (
    <div>
        <h1>Recoil Example</h1>
        <h3>Learn recoill with simple todo list app</h3>
        <br></br>
        <ul>
          <li>Total items: {totalTodoCount}</li>
          <li>Items completed: {todoCompleted}</li>
          <li>Items not completed: {todoNotCompleted}</li>
          <li> Percent completed: {precentOfCompletedTodo}%
          </li>
          <li>
            Text not completed:
            {todos.filter(todo=>todo.completed === false).map((todo,index)=>`${todo.todoText},`)}
          </li>
        </ul>
    </div>
  )
}

export default TodoStats;
