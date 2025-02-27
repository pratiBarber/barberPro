"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';  
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const AuthPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    const registerParam = searchParams.get('register');
    setIsRegister(registerParam === 'true');
  }, [searchParams]);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="login-pai flex flex-col md:flex-row h-screen">
      {isRegister ? (
        <>
          <div className="md:flex-1 flex justify-center items-center bg-[#D99C52] transition-all duration-500 ease-in-out transform translate-x-0">
            <RegisterForm onToggle={toggleForm} />
          </div>
          <div className="login-banner md:flex-1 bg-black bg-[url('../../public/banner.jpg')] bg-center bg-cover md:bg-[length:50%] transition-all duration-500 ease-in-out transform translate-x-0" />
        </>
      ) : (
        <>
          <div className="login-banner md:flex-1 bg-black bg-[url('../../public/banner.jpg')] bg-center bg-cover md:bg-[length:50%] transition-all duration-500 ease-in-out transform translate-x-0" />
          <div className="md:flex-1 flex justify-center items-center bg-[#D99C52] transition-all duration-500 ease-in-out transform translate-x-0">
            <LoginForm onToggle={toggleForm} />
          </div>
        </>
      )}
    </div>
  );
};

export default AuthPage;
