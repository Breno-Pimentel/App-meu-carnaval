import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Forms from "../pages/Forms";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/feedbacks" element={<Forms />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
