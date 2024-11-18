
import Home from "./components/Home"
import Login from "./Login"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./Signup"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    
    <BrowserRouter >
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

