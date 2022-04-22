import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";
import Home from "./components/Home/Home";
import ForgetPass from "./components/Login/ForgetPass/ForgetPass";
import Login from './components/Login/Login';
import Register from "./components/Login/Register/Register";
import MyPosts from "./components/MyPosts/MyPosts";
import Nav from './components/Nav/Nav';
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";
import UpdatePost from "./components/UpdatePost/UpdatePost";
function App() {
  return (
    <div >
      <Nav></Nav>
      <Routes>
        <Route path='/' element ={<Home></Home>}></Route>
        <Route path='/home' element ={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path ="forgetpassword" element ={<ForgetPass></ForgetPass>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="createpost" element={
          <ProtectedPage>
            <CreatePost></CreatePost>
          </ProtectedPage>
        } />
        <Route path="myposts" element={
          <ProtectedPage>
            <MyPosts></MyPosts>
          </ProtectedPage>
        } />
        <Route path="updatepost/:id" element={
          <ProtectedPage>
            <UpdatePost></UpdatePost>
          </ProtectedPage>
        } />
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
