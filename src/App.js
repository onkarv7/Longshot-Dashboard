import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Admin from "./components/Admin/Admin";
import DragandDrop from "./components/Admin/DragandDrop";
import Table from "./Table";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />}></Route>
          <Route path="/drag" element={<DragandDrop />} />
        </Routes>
      </BrowserRouter>
      {/* <Table /> */}
    </div>
  );
}

export default App;
