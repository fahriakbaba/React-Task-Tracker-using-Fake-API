import React from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    if (res.status === 200) {
      setItems(data);
    }
  }

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

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
    setItems(prevItems => (prevItems.filter(item => item.id !== id)));
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
[
  {
    "text": "Clean House",
    "day": "Saturday",
    "reminder": true, 
    "id": 5
  },
  {
    "text": "Eat a fish",
    "day": "Monday",
    "reminder": false,
    "id": 6
  },
  {
    "text": "Shopping meal",
    "day": "Monday",
    "reminder": false,
    "id": 7
  },
  {
    "text": "Wash a car",
    "day": "Tuesday",
    "reminder": true,
    "id": 8
  },
  {
    "text": "Brush your teeth",
    "day": "Everyday",
    "reminder": false,
    "id": 9
  },
  {
    "text": "Go to the cinema ",
    "day": "one day per a week",
    "reminder": false,
    "id": 10
  }
]

How to start this project:
1)Start JSON Server
json-server --watch db.json
2)Open new terminal
cd task-tracker
npm start

*/

