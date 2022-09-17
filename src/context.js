import React from "react";

const AppContext = React.createContext();

function AppProvider( {children} ) {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
      getData();
    }, [])

    const getData = async() => {
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();
      if(res.status === 200) {
        setItems(data);
      }
    }
  
    return (<AppContext.Provider value={{
        items
    }}>{children}</AppContext.Provider>)
}


const useGlobalContext = () => React.useContext(AppContext);
export {useGlobalContext, AppProvider};

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

Start JSON Server
json-server --watch db.json

*/

