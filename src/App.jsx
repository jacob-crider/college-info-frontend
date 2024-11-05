import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollegeList from "./components/CollegeList";
import CollegeDetails from "./components/CollegeDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CollegesTable from "./components/table/CollegesTable";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<CollegeList />} />
            <Route path="/college/:id" element={<CollegeDetails />} />
          </Routes>
        </div>
        <CollegesTable />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
