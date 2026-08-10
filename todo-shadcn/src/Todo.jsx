import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./components/ui/dialog";
function Todo() {
  const [lists, SetList] = useState([]);
  const [task, SetTask] = useState("");

  function Add() {
    if (task.trim() !== "") {
      SetList((c) => [...c, task]);
      SetTask("");
    }
  }

  function get(e) {
    SetTask(e.target.value);
  }

  function remove(index) {
    SetList((c) => c.filter((item, i) => i !== index));
  }

  function MoveUp(index) {
    if (index > 0) {
      const UpdateList = [...lists];

      [UpdateList[index], UpdateList[index - 1]] = [
        UpdateList[index - 1],
        UpdateList[index],
      ];

      SetList(UpdateList);
    }
  }

  function MoveDown(index) {
    if (index < lists.length - 1) {
      const UpdateList = [...lists];

      [UpdateList[index], UpdateList[index + 1]] = [
        UpdateList[index + 1],
        UpdateList[index],
      ];

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

      <div className="container2">
        <Input
          value={task}
          onChange={get}
          onKeyDown={handleKeyDown}
          className="inpu"
        />

        <Button onClick={Add}>
          Add
        </Button>
      </div>

      <ul className="Lists">
        {lists.map((list, index) => (
          <li key={index}>
            <span className="text">{list}</span>

            <Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">
      Delete
    </Button>
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete task?</DialogTitle>

      <DialogDescription>
        Are you sure you want to delete "{list}"?
      </DialogDescription>
    </DialogHeader>

    <DialogFooter>
      <Button variant="destructive" className="Delete" onClick={() => remove(index)}>
        Delete
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

            <Button
              variant="outline"
              className ="Move"
              onClick={() => MoveUp(index)}
            >
              Up
            </Button>

            <Button
              variant="outline" className ="Move"
              onClick={() => MoveDown(index)}
            >
              Down
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

 