import React, { useEffect, useRef, useState } from "react";
import DeleteList from "../components/delete";
import "./InputTodo.css";

const InputTodo = () => {
  let data = {
    todo: "",
    dateToday: "",
    timeToday: "",
  };
  let [work, setListArray] = useState(data);
  const [list, setList] = useState([]);
  const input = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    input.current.focus();
  });

  function todoHandleChange(event) {
    setListArray({ ...work, [event.target.name]: event.target.value });
  }

  function handleAdd() {
    setList((oldTask) => {
      return [...oldTask, work];
    });
    setListArray(data);
    setCount(count + 1);
  }

  console.log(list);

  function handleDelete(id) {
    setList((oldTask) => {
      return oldTask.filter((taskEle, index) => {
        return id !== index;
      });
    });
    setCount(count - 1);
  }

  return (
    <>
      <div className="main-div">
        <h2>Todo List</h2>
        <div className="input-section">
          <input
            name="todo"
            className="input"
            ref={input}
            type="text"
            placeholder="Enter you todo works"
            onChange={todoHandleChange}
            value={work.todo}
          ></input>
          <input
            className="date"
            name="dateToday"
            type="date"
            onChange={todoHandleChange}
            value={work.dateToday}
          ></input>
          <input
            className="time"
            name="timeToday"
            type="time"
            onChange={todoHandleChange}
            value={work.timeToday}
          ></input>

          <button className="addButton" onClick={handleAdd}>
            +
          </button>
        </div>
        {list.map((tasks, index) => (
          <DeleteList
            text={tasks.todo}
            key={index}
            id={index}
            deleteClick={handleDelete}
            date={tasks.dateToday}
            time={tasks.timeToday}
          />
        ))}
        <div className="due-div">Total due tasks: {count}</div>
      </div>
    </>
  );
};

export default InputTodo;
