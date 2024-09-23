import React from 'react';
const Loader = () => {
  return (
    <div style={styles.container}>
      <img 
        src="https://genzairewardrobe.netlify.app/Logo/Logo.png" 
        style={styles.image} 
        alt="Logo"
      />
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.5);
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white',
  },
  image: {
    width: '250px',
    height: '250px',
    animation: 'zoomInOut 3s ease-in-out infinite',
  },
};

export default Loader;
