import { useState, Fragment } from 'react';

import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';


function App() {
  return (
    // Use fragmenet should dont have unnecessary div wrapping
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
