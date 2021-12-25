import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [InputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const InputEvent = (e) => {
    setInputList(e.target.value);
  };
  const SubmitEvent = () => {
    setItems((preValue) => {
        return (
            [...preValue, InputList]
            
        )
    });
    setInputList("");
  };
  return (
    <div className="main_todo">
      <div className="todo">
        <h2>Todo List</h2>
        <div className="addTodo">
          <input
            type="text"
            placeholder="Add a item"
            onChange={InputEvent}
            value={InputList}
          />
          <button type="submit" onClick={SubmitEvent}>
            +
          </button>
        </div>

        <div className="todoHolder">
          {Items.map((item, i) => {
              return (
                <TodoList text={item} key={i} />
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Todo;
