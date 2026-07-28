import { useState } from "react";

function Todo() {

  const [lists, SetList] = useState([]);
  const [task, SetTask] = useState("");

  function Add() {
    if (task.trim() !== "") {
      SetList(c => [...c, task]);
      SetTask("");
    }
  }

  function get(e) {
    SetTask(e.target.value);
  }

  function remove(index) {
    SetList(c => c.filter((item, i) => i !== index));
  }

  function MoveUp(index) {
    if (index > 0) {
      const UpdateList = [...lists];

      [UpdateList[index], UpdateList[index - 1]] =
      [UpdateList[index - 1], UpdateList[index]];

      SetList(UpdateList);
    }
  }

  function MoveDown(index) {
    if (index < lists.length - 1) {
      const UpdateList = [...lists];

      [UpdateList[index], UpdateList[index + 1]] =
      [UpdateList[index + 1], UpdateList[index]];

      SetList(UpdateList);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      Add();
    }
  }

  return (
    <div className="Container">
      <h1>To-Do-List</h1>
    <div className="container2">  <input
        type="text"
        placeholder="Enter a task"
        onChange={get}
        value={task}
        onKeyDown={handleKeyDown}
      />

      <button onClick={Add}>
        Add
      </button></div>
    

      <ul className="Lists">
        {lists.map((list, index) => (
          <li  key={index}>
            
    <span className="text">
        {list}
      </span>
            <button className="Delete" onClick={() => remove(index)}>
              Delete
            </button>

            <button className ="Move" onClick={() => MoveUp(index)}>
              ☝️
            </button>

            <button className ="Move" onClick={() => MoveDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Todo;