import React from "react";
import ListItem from "../../components/ListItem/ListItem";

import PrimaryButton from "../../components/Button/PrimaryButton";
import { IoAddOutline } from "react-icons/io5";

const ToDoPage = () => {
  document.documentElement.classList.remove("dark");

  const onClick1 = () => {
    console.log("Add Task");
  };

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const handleComplete = (id: string) => {
    console.log(id);
  };

  return (
    <div className="container mx-auto flex flex-col">
      <h1>ToDoPage</h1>

      <div className="flex flex-row justify-between">
        <div className="my-10">Your Tasks:</div>
        <PrimaryButton onClick={onClick1}>
          <IoAddOutline />
        </PrimaryButton>
      </div>

      <div className="divide-y">
        <ListItem
          task="Task 1"
          id="1"
          isCompleted={true}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        ></ListItem>

        <ListItem
          task="Task 1"
          id="1"
          isCompleted={true}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        ></ListItem>
        <ListItem
          task="Task 1"
          id="1"
          isCompleted={true}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        ></ListItem>
      </div>
    </div>
  );
};

export default ToDoPage;
