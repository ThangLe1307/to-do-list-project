import React from "react";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import Button from "../../components/Button/Button";

type Props = {
  task: string;
  isCompleted: boolean;
  id: string;
  handleDelete: (id: string) => void;
  handleComplete: (id: string) => void;
};

const ListItem = ({
  task,
  isCompleted,
  id,
  handleComplete,
  handleDelete,
}: Props) => {
  return (
    <div className="flex flex-row justify-between hover:bg-slate-500">
      <div>{task}</div>

      <div className="flex flex-row">
        <Button onClick={() => handleComplete}>
          <MdOutlineModeEditOutline />
        </Button>
        <Button onClick={() => handleDelete}>
          <MdDelete />
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
