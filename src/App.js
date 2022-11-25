
import "./App.css";
import Admin from "./components/Admin/Admin";
import DragandDrop from "./components/Admin/DragandDrop";
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
    </div>
  );
}

export default App;
