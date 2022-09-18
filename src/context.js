import React from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [items, setItems] = React.useState([]);
  const [deletedTasks, setDeletedTasks] = React.useState(JSON.parse(localStorage.getItem("deletedTasks")) || []);

  /* to save deletedTasks using window.localStorage */
  React.useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks))
  }, [deletedTasks]);
  /* localStorage.clear(); || clear localStorage */
  console.log("deletedTasks: ",deletedTasks);

  /* to get task when page load. */
  React.useEffect(() => {
    getData();
  }, [])

  /* to get tasks by using native fetch() method */
  const getData = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    if (res.status === 200) {
      setItems(data);
    }
  }

  /* to add task method */
  const addTask = async (task) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();
    setItems(prevItems => ([...prevItems, data]));
  };

  /* to delete task method */
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
    setItems(prevItems => (prevItems.filter(item => item.id !== id)));
    const deleted = items.filter(item => item.id === id);
    setDeletedTasks(oldState => ([...oldState, ...deleted]));
  }



  return (<AppContext.Provider value={{
    items,
    addTask,
    deleteTask
  }}>{children}</AppContext.Provider>)
}


const useGlobalContext = () => React.useContext(AppContext);
export { useGlobalContext, AppProvider };

/*

How to start this project:
1)Start JSON Server
json-server --watch db.json
2)Open new terminal
cd task-tracker
npm start

*/

