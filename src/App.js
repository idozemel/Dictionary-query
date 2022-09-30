import React from 'react';
import Header from './Components/Header/Header';

import "./App.css";
import LoadingPage from './screens/LoadingPage/LoadingPage';

function App() {
 
  return (
    <div className="App">
    <Header>CellXpert</Header>
    <LoadingPage />
    </div>
  );
}

export default App;
