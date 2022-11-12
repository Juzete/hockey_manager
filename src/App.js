import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}
