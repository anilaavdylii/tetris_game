import React, {useContext} from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { TetrisContext } from './context/TetrisContext';
import Home from './pages/home/Home';

const useAuth = () => {
    const {error, username} = useContext(TetrisContext);
    let val;
    if(!error && username.trim().length > 3){
        val = true
    }else{
        val = false;
    }
    const user = {loggedIn: val};
    return user && user.loggedIn;
}

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to = "/"/>
}

export default ProtectedRoutes