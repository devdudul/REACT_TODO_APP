import React from "react";
import { useState } from "react";
import AddTaskStyle from "./AddTask.module.css";

//console.log("AddTask", AddTask);
export default function AddTask(props) {
  const [input, setInput] = useState("");
  //here the input from text box is got
  function inputHndler(e) {
    console.log("input Handler", e.target.value);
    setInput(e.target.value);
  }
  //
  function buttonClickHndler(e) {
    console.log("button clicked", e);
    console.log("input content", input);
    console.log("props", props);

    props.taskAdd(input);
    console.log("taskList", props.taskList);
    //setInput is the methood to assign the input value to the empty string andthe end the task list is undefined
    setInput("");
  }

  ///Style
  console.log("AddTaskStyle", AddTaskStyle);
  //
  return (
    <div className={AddTaskStyle.AddTask}>
      <input
        type='text'
        value={input}
        onInput={inputHndler}
        className={AddTaskStyle.inputBox}
      ></input>
      <button onClick={buttonClickHndler} className={AddTaskStyle.addTaskBtn}>
        Add Task
      </button>
    </div>
  );
}
