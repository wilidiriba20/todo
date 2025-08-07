// TodoCard.jsx
export function TodoCard(props) {
  const { todoIndex, todos } = props; // renamed todosIndex to todoIndex
  const todo = todos[todoIndex]; // access the todo item by index

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.complete}>
          <h6>Done</h6>
        </button>
        <button>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
