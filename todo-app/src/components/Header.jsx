export function Header(props){
    const {todos}=props;
    const todosLength = todos.length;

    const isTasksPlural = todos.lenght != 1;

    const taskorTasks=isTasksPlural ? 'tasks' :'task';

    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open tasks{taskorTasks}.</h1>
        </header>
    )
}