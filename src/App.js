import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";
import Login from './components/Login/Login';
import Register from "./components/Login/Register/Register";
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";
function App() {
  return (
    <div >
      <Routes>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="createpost" element={
          <ProtectedPage>
            <CreatePost></CreatePost>
          </ProtectedPage>
        } />
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
