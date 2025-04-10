import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/AddBlog/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AddBlog from './pages/AddBlog/AddBlog';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addblog" element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
