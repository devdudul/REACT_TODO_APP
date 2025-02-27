import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { Status } from "../App";

import ListStyle from "./List.module.css";
//import "./List.css";
export default function List(props) {
  function deteteTask(e) {
    console.log("delete button clicked");
    console.log(e);
    console.log("props", props);
    props.taskDelet(props.id);
  }
  function compliteTask(e) {
    console.log("check bok is clicked");
    console.log("event", e);
    console.log("props", props);
    props.taskComplite(props.id, e.target.checked);

    console.log("taskStatus :", props.taskStatus);
  }

  //console.log("classNames", classNames("task", { competed: 2 % 2 == 1 }));
  // console.log("ListStyle", ListStyle);
  return (
    <div>
      <ul>
        {/* <li>{props.taskStatus=Status.COMPLETED ? props.taskListProp :  props.taskListProp}</li> */}
        {/* {props.taskStatus == Status.COMPLETED ? (
          <li style={{ color: "red" }}>{props.taskListProp} </li>
        ) : (
          <li>{props.taskListProp} </li>
        )} */}

        <li
          className={`${ListStyle.task} ${
            props.taskStatus == Status.COMPLETED ? ListStyle.completed : ""
          }`}
        >
          <input
            type='checkbox'
            onChange={compliteTask}
            className={ListStyle.checkBox}
          ></input>
          <span>{props.taskListProp} </span>

          <button onClick={deteteTask} className={ListStyle.deletBtn}>
            Delet Task
          </button>
        </li>
      </ul>
    </div>
  );
}
