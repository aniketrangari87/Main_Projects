
import './App.css'
import Login from "./components/Login"
import Profile from './components/Profile'

function App() {
  
  return (
    <UserContextProviser>
     <h1> Aniket Rangari </h1>

     <Login/>
     <Profile/>
    </UserContextProviser>
  )
}

export default App
