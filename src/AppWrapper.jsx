import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearAuthInfo } from './redux/authSlice';

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [TokenExpired, setTokenExpired] = useState(false);
  const token = sessionStorage.getItem('token');
  const tokenLife = 6 * 60 * 60 * 1000;

  useEffect(() => {
    if (!token && !isLoginOrSignupPath(location.pathname)) {
      dispatch(clearAuthInfo());
      setTokenExpired(true);
    }
  }, [location.pathname, token]);

  useEffect(() => {
    if (token && isLoginOrSignupPath(location.pathname)) {
      navigate('/Home');
    }
  }, [location.pathname, navigate, token]);

  useEffect(() => {
    if (token) {
      const tokenTimeout = setTimeout(() => {
        dispatch(clearAuthInfo());
        setTokenExpired(true);
      }, tokenLife);

      return () => clearTimeout(tokenTimeout);
    }
  }, [dispatch, token]);

  const isLoginOrSignupPath = (pathname) => {
    return pathname === '/login' || pathname === '/signup' || pathname === '/';
  };

  useEffect(() => {
    if (TokenExpired)  {
      navigate('./', { replace: true });
      window.location.reload();
    }
  }, [TokenExpired, navigate]);

  return <>{children}</>;
};

export default AppWrapper;