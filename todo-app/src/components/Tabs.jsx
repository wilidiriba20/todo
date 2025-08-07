export function Tabs(props) {
  const { todos } = props;

  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        let numOfTasks = 0;

        if (tab === "All") {
          numOfTasks = todos.length;
        } else if (tab === "Open") {
          numOfTasks = todos.filter((val) => !val.complete).length;
        } else {
          numOfTasks = todos.filter((val) => val.complete).length;
        }

        return (
          <button key={tabIndex} className="tab-button">
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}

