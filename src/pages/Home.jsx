import React from "react";
import Tasks from "../components/Tasks/Tasks";
import { useGlobalContext } from "../context";




export default function Home() {

  const { items } = useGlobalContext();
  console.log("items: ", items);

  return (
    <main>
      <ul>
        <Tasks  tasks={items}/>
      </ul>
    </main>
  );
}
