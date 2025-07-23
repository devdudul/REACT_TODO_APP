import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import List from "./components/List";
import AppStyle from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
export const Status = {
  COMPLETED: "completed",
  PENDING: "pending",
};

function App() {
  const [taskList, SetTaskList] = useState([
    {
      taskName: "Task 1",
      status: Status.PENDING,
      id: 1,
    },
    {
      taskName: "Task 2",
      status: Status.PENDING,
      id: 2,
    },
    {
      taskName: "Task 3",
      status: Status.PENDING,
      id: 3,
    },
        {
      taskName: "Task 4",
      status: Status.PENDING,
      id: 4,
    },
  ]);

  function taskAdd(param) {
    SetTaskList([
      ...taskList,
      {
        taskName: param,
        status: Status.PENDING,
        id: uuidv4(),
      },
    ]);
  }
  function taskDelet(id) {
    console.log("taskDelete is called", id);
    const filteredTaskList = taskList.filter((task) => {
      if (id == task.id) {
        return false;
      } else {
        return true;
      }
    });
    console.log("filteredTaskList", filteredTaskList);
    SetTaskList(filteredTaskList);
  }
  function taskComplite(id, isChecked) {
    console.log("task is complited");
    console.log(id);
    console.log("taskList", taskList);
    // i wan to set a listIItsm witjh uipdate dstatus
    const newTaskList = taskList.map((task) => {
      if (task.id == id) {
        if (isChecked == true) {
          task.status = Status.COMPLETED;
        } else {
          task.status = Status.PENDING;
        }
      }

      ///////
      return task;
    });
    SetTaskList(newTaskList);
    console.log("newTaskList", newTaskList);
    console.log("task list ", taskList);
  }
  //console.log("taskList", taskList);

  return (
    <div>
      <h1 className={AppStyle.header}>Todo app </h1>
      <div>
        <div className={AppStyle.main}>
          <AddTask taskAdd={taskAdd} />
        </div>

        <div>
          {taskList.map((task) => {
            console.log({ task });
            // task is object over here
            return (
              <List
                id={task.id}
                taskListProp={task.taskName}
                key={task.id}
                taskList={taskList}
                taskDelet={taskDelet}
                taskComplite={taskComplite}
                taskStatus={task.status}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

// {/* <List taskList1={taskList[2].taskName} /> */}
// {taskList.map((e) => {
//   console.log("map rendered", e);

//   return <List taskListProp={e.taskName} />;
// })}
