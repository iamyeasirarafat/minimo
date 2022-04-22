import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Register from "./components/Login/Register/Register";
function App() {
  return (
    <div >
      <Routes>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
