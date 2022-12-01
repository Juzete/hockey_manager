import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import ErrorPage404 from "./pages/404-Page";
import Dashboard from "./pages/Dashboard";
import LoginPage from './pages/LoginPage';
import MatchesPage from "./pages/MathesPage";
import PlayersPage from "./pages/PlayersPage";


export default function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/404' element={<ErrorPage404/>} />
        <Route path='/players' element={<PlayersPage/>} />
        <Route path='/matches' element={<MatchesPage/>} />
      </Routes>
    </Router>
  );
}
