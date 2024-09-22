import React from 'react';

const LogoGallery = ({ logos }) => {
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <h2 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '20px 0',
        color: '#666',
        marginBottom: '3rem',
      }}>
        LIST OF KEY PARTNERSHIPS
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{ maxHeight: '100px', maxWidth: '150px', objectFit: 'contain' }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoGallery;
