import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Program from "./pages/Program";
import NewsAndEvents from "./pages/NewsAndEvents";
import Faculty from "./pages/Faculty";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route path="/Faculty" element={<Faculty />} />
      </Routes>
    </Router>
  );
};

export default App;