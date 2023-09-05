import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Update the background image based on the current route
    switch (location.pathname) {
      case '/':
        setBackgroundImage('url("https://i.pinimg.com/originals/5c/5f/36/5c5f36f8010c497d24c00302fc34f3b2.jpg")');
        break;
      case '/Sardines':
        setBackgroundImage('url("https://i.gifer.com/9Ieq.gif")');
        break;
      default:
        setBackgroundImage(''); 
    }
  }, [location.pathname]);

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }
    : {};

  return (
    <div style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Layout;
