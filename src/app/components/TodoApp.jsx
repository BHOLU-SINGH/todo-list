"use client";

import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(storedTasks);
    }
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };

      const updatedTasks = [...tasks, newTaskObj];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-2xl border w-screen sm:w-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          To-Do List
        </h2>
        <span className="text-2xl" role="img" aria-label="note">
          📝
        </span>
      </div>
      <div className="flex flex-col mt-5 mb-5 sm:flex-row gap-3 sm:gap-0">
        <input
          className="flex-1 p-3 border border-gray-300 rounded-md sm:rounded-r-none outline outline-none"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add your task"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <button
          className="outline outline-none pt-2 pb-2 pl-3 pr-3 text-white cursor-pointer bg-light-tomato rounded-md sm:rounded-l-none hover:bg-dark-tomato"
          onClick={addTask}
        >
          ADD
        </button>
      </div>
      <ul className="m-0 p-0 list-none">
        {tasks.map((task, index) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
