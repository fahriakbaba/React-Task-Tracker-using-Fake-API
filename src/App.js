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
import Error from "./pages/Error";
import Footer from "./components/Footer/Footer";


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
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
