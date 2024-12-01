import React from "react";

const TaskForm = ({ task, onChange, onSubmit, isEditing }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={onChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={onChange}
        placeholder="Task Description"
        required
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={onChange}
        required
      />
      <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
