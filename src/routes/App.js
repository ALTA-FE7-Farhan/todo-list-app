import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailTodo from "../pages/DetailTodo";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detail/:todoId" element={<DetailTodo />} />
        <Route path="*" element={<div>404 Error Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
