import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

// useNavigate Example - Page Change karne ke liye
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Jab login successful ho
    if(loginSuccessful) {
      // Dashboard page pe bhej do
      navigate('/dashboard');
    }
  };

  const handleBackButton = () => {
    // Pichle page pe jaane ke liye
    navigate(-1);
  };

  return (
    <div className="p-4">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login Karo</button>
      <button onClick={handleBackButton}>Wapas Jao</button>
    </div>
  );
};

// useNavigation Example - Loading State dikhane ke liye
const ProductPage = () => {
  const navigation = useNavigation();

  return (
    <div className="p-4">
      {/* Agar page load ho raha hai toh loading dikhao */}
      {navigation.state === 'loading' && (
        <div>Ruko zara... Loading ho raha hai...</div>
      )}

      {/* Agar form submit ho raha hai */}
      {navigation.state === 'submitting' && (
        <div>Form submit ho raha hai...</div>
      )}

      {/* Normal state */}
      {navigation.state === 'idle' && (
        <div>Sab theek hai, page ready hai</div>
      )}

      <h2>Product List</h2>
      {/* Baaki content */}
    </div>
  );
};