import React from "react";
import Tasks from "../components/Tasks/Tasks";
import { useGlobalContext } from "../context";
import SearchTask from "../components/SearchTask/SearchTask";

export default function Home() {
  const [search, setSearch] = React.useState("");
  const { items } = useGlobalContext();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterItems = items.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <SearchTask handleSearch={handleSearch} search={search} />
      <ul>
        <Tasks
          tasks={filterItems}
        />
      </ul>
    </main>
  );
}
