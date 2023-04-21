import './App.css';
import Login from './Components/Login/Login';
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/menu-acm");
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
