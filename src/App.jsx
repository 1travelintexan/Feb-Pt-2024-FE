import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import IsPrivate from "./components/IsPrivate";
import OutletComponent from "./components/OutletComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <OutletComponent>
                <Profile />
              </OutletComponent>
            </IsPrivate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
