import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import ErrorPage404 from "./pages/404-Page";
import Dashboard from "./pages/Dashboard";
import LoginPage from './pages/LoginPage';
import LogoutPage from "./pages/LogoutPage";
import MatchesPage from "./pages/MathesPage";
import PlayersPage from "./pages/PlayersPage";
import RegistrationPage from "./pages/RegistrationPage";
import TransactionsPage from "./pages/TransactionsPage"


export default function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/404' element={<ErrorPage404/>} />
        <Route path='/players' element={<PlayersPage/>} />
        <Route path='/matches' element={<MatchesPage/>} />
        <Route path='/logout' element={<LogoutPage/>} />
        <Route path='/transactions' element={<TransactionsPage/>} />
        <Route path='/register' element={<RegistrationPage/>} />
      </Routes>
    </Router>
  );
}
