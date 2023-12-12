import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Meetings from "./pages/Meetings";
import Meeting from "./pages/Meeting";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meetings />} />
        <Route path="/meeting/:id" element={<Meeting />} />
        <Route path="/meeting/create" element={<Create />} />
        <Route path="/meeting/:id/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
