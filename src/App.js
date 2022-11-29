import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from './pages/LoginPage';


export default function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}
