import { Route, Routes } from "react-router-dom";
import { LogIn } from "../../Pages/LogIn/LogIn";
import { Profile } from "../../Pages/Profile/Profile";
import { Register } from "../../Pages/Register/Register";

export const ApiRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
};
