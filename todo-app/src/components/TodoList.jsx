// TodoList.jsx
import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;

  const tab = "All";
  const filterTodosList = tab === 'All'?
  todos :
  tab=== 'Completed'?
  todos.filter(val =>val.complete):
  todos.filter(val =>!val.complete);

    // (you can use it later for filtering)

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />;
      })}
    </>
  );
}
