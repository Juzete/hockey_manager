import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!auth.isAuth) navigate("/login");
    }, [auth.isAuth]);
    
    return auth.isAuth;
}