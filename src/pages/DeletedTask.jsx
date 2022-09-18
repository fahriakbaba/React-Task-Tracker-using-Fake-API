import React from "react";
import { useGlobalContext } from "../context";
import Delete from "../components/Delete/Delete";

function DeletedTask() {
  const { deletedTasks, setDeletedTasks } = useGlobalContext();

  return (
    <main>
      {deletedTasks.map((deleteItem, index) => (
        <Delete
          key={index}
          setDeletedTasks={setDeletedTasks}
          deleteItem={deleteItem}
        />
      ))}
    </main>
  );
}

export default DeletedTask;
