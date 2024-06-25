import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Component/Login";
import { Onpage } from "./Component/Onpage";
import { NewBooking } from "./Component/NewBooking";
import { Dashboard } from "./Component/Dashboard";
export function RouteFile() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newbooking" element={<NewBooking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Onpage />} />
      </Routes>
    </BrowserRouter>
  );
}
