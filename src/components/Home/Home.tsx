import React from 'react';
import { FaBars } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='btn'>show modal</button>
    </main>
  );
};

export default Home;
