import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const walletConnect = async () => {
    console.log('Requesting Account');

    //check if metamsk extention exist
    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error Connecting ...');
      }
    } else {
      console.log('Metamask not detected');
    }
  };
  return (
    <>
      <nav className='navbar'>
        <h3>Our Project</h3>
        <ul>
          <li>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/buy' className='nav-link'>
              Buy
            </Link>
          </li>
          <li>
            <Link to='/aboutus' className='nav-link'>
              About
            </Link>
          </li>
          <li>
            <button className='btn nav-btn' onClick={walletConnect}>
              {walletAddress ? walletAddress : 'Connect Wallet'}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
