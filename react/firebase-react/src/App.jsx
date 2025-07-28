import './App.css'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard';
import { Routes, Route , useNavigate} from "react-router";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' element={<Auth onSuccess={() => {
          navigate("/dashboard");
        }} />}/>
        <Route path='/dashboard' element={<Dashboard />}/>      
    </Routes>
  )
}

export default App
