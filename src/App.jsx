import Login from "./components/login"
import SignupPage from "./components/signup"
import Home from "./home"
import NavBar from "./components/NavBar"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <> <Router>
    <Routes>
    <Route exact path="/dashbord" element={<NavBar/>}></Route>
  </Routes>
    <Routes>
    <Route exact path="/dashbord" element={<Home/>}></Route>
  </Routes>
    <Routes>
    <Route exact path="/" element={<Login/>}></Route>
  </Routes>
    <Routes>
    <Route exact path="/signup" element={<SignupPage/>}></Route>
  </Routes>

</Router>
      
      
    </>
  )
}

export default App
