import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
// import TopicFilter from "./components/TopicFilter";
import FilterCard from "./components/FilterCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/" element={<FilterCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
