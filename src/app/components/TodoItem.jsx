import { useState } from "react";

const TodoItem = ({ task, onDelete }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  const updateChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = () => {
    if (typeof window !== "undefined") {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = storedTasks.map((t) => {
        if (t.id === task.id) {
          t.completed = isChecked;
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };
  handleChange();

  return (
    <li className="flex justify-between items-center p-3 border border-transparent border-b-slate-300 last:border-none">
      <div className="flex items-center overflow-hidden">
        <input
          className="w-4 h-4 mr-2 checked:bg-dark-tomato checked:text-light-tomato bg-dark-tomato rounded border-none outline-none "
          type="checkbox"
          defaultChecked={isChecked ? true : false}
          // defaultChecked={task.completed}
          onChange={updateChecked}
        />
        <p className={isChecked ? "truncate max-w-xs mr-5 line-through text-slate-600" : "truncate max-w-xs mr-5 no-underline"}>
          {task.text}
        </p>
      </div>
      <button
        className="border border-transparent bg-transparent text-light-tomato hover:text-dark-tomato"
        onClick={onDelete}
      >
        ✖
      </button>
    </li>
  );
};

export default TodoItem;
