import React from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [items, setItems] = React.useState([]);
  const [deletedTasks, setDeletedTasks] = React.useState(JSON.parse(localStorage.getItem("deletedTasks")) || []);

  /* to save deletedTasks using window.localStorage */ 
  /* localStorage.clear(); || clear localStorage */
  React.useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks))
  }, [deletedTasks]);


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
  };

  /* to update task method */
  const updateTask = async(id) => {
    const getResponse = await fetch(`http://localhost:3000/tasks/${id}`);
    const getData = await getResponse.json();
    const updatedData = {...getData, reminder: !getData.reminder};

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();
    /* to change reimnder property on UI */
    setItems(oldState => {
      return oldState.map(item => item.id === id ? {...item, reminder: data.reminder} : item)
    })
  };

  return (<AppContext.Provider value={{
    items,
    deletedTasks,
    setDeletedTasks,
    addTask,
    deleteTask,
    updateTask
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

