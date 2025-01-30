import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  const login = (userData) => {
    //userData would be // {email: 'AKash'}
    setIsLoggedIn(true);
    setActiveUser(userData);
    
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('activeUser', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setActiveUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('activeUser');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, activeUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// customHook 
export const useAuth = () => useContext(AuthContext);

