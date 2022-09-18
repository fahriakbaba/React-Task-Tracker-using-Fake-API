import React from 'react';
import { useGlobalContext } from "../context";
import Complete from "../components/Complete/Complete";

function CompletedTask() {
  const { items } = useGlobalContext();
  const completedTasks = items.filter(item => item.reminder===true);

  return (
    <main>
      {completedTasks.map((item, index) => {
        return(
          <Complete key={index} completeItem={item} />
        )
      })}
    </main>
  )
}

export default CompletedTask;