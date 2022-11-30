import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import ErrorPage404 from "./pages/404-Page";
import Dashboard from "./pages/Dashboard";
import LoginPage from './pages/LoginPage';


export default function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/404' element={<ErrorPage404/>} />
      </Routes>
    </Router>
  );
}
