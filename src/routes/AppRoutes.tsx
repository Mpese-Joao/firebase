import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../Components/Login/login";
import { Register } from "../Components/Register/register";

import { HomePage } from "../Components/HomePage/homepage";



export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
       
  
      </Routes>
    </BrowserRouter>
  );
}