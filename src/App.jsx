import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/AddBlog/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AddBlog from './pages/AddBlog/AddBlog';
import EditBlog from './pages/AddBlog/editFile/EditBlog';
import SingleBLog from './pages/AddBlog/SingleBLog';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
