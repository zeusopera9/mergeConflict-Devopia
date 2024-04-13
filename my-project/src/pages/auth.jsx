import React from 'react';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import { useState } from 'react';

const Auth = () => { 
  const [isLogin, setIsLogin] = useState(true);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div>
      {isLogin ? <Login /> : <Register />}
      <button onClick={switchAuthModeHandler}>
        {isLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

export default Auth;
