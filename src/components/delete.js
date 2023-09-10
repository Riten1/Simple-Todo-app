import React from "react";
import "../components/delete.css";

const deleteList = ({ text, deleteClick, id, date, time }) => {
  let number = id + 1;

  return (
    <div className="list-div">
      <div className="lists">
        <p>
          {number}. {text}
        </p>
      </div>
      <div className="date-list">
        <p>{date}</p>
      </div>
      <div className="time-list">
        <p>{time}</p>
      </div>
      <button
        className="delete-button"
        onClick={() => {
          deleteClick(id);
        }}
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default deleteList;
