import React, { Fragment } from 'react';
import { Home, Modal, Sidebar } from '../';

const App: React.FC = () => {
  return (
    <Fragment>
      <Home />
      <Modal />
      <Sidebar />
    </Fragment>
  );
};

export default App;
