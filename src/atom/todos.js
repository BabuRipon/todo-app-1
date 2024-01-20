import { atom, selector } from 'recoil';

const todosAtom = atom({
    key: 'todosAtom',
    default: [],
})

const todoInputAtom = atom({
    key: 'todoInputAtom',
    default: ''
});

const todoFilterTextAtom = atom({
    key: 'todoFilterTextAtom',
    default: 'all'
})

const filterTodosAtom = selector({
    key: ' filtertodosAtom',
    get:({get})=>{
        console.log('filterTodosAtomSelector');
        const filterText = get(todoFilterTextAtom);
        const todos = get(todosAtom);

        if(filterText === 'not-completed'){
           return todos.filter(todo=>!todo.completed); 
        }
        else if(filterText === 'completed'){
            return todos.filter(todo=>todo.completed);
        }

        return todos;
    }
})

const todoListStatsAtom  = selector({
    key:'todoListStatsAtom',
    get:({get})=>{
        const todos = get(todosAtom);

        const totalTodoCount = todos.length;
        const todoCompleted = todos.reduce((acc,cur)=>{
            if(cur.completed){
                acc++;
            }
            return acc;
        },0);

        const todoNotCompleted = totalTodoCount - todoCompleted;
        const precentOfCompletedTodo = Math.round(totalTodoCount === 0 ? 0 : todoCompleted / totalTodoCount * 100);

        return {
            totalTodoCount,
            todoCompleted,
            todoNotCompleted,
            precentOfCompletedTodo,
        }
    }
})

export {
    todosAtom,
    todoInputAtom,
    todoFilterTextAtom,
    filterTodosAtom,
    todoListStatsAtom,
}