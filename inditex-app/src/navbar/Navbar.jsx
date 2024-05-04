import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: 'white',
      border: '1px solid black',
      color: 'black',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold' }}>CLOTHIFY</div>
      <div>
        <a href="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Home</a>
        <a href="/shop" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Shop</a>
        <a href="/about" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>About Us</a>
        <a href="/contact" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
