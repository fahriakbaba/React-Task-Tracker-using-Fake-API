import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import DeletedTask from "./pages/DeletedTask";
import CompletedTask from "./pages/CompletedTask";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/delete" element={<DeletedTask />} />
          <Route path="/complete" element={<CompletedTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
