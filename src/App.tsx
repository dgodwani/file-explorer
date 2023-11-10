import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import FileContent from './components/Content';
import { files } from './data';
import { ContextMenu } from './components/Menu/types';

function App() {
  
  const [data, setData] = useState(files)

  return (
    <div className="app-container">
      <Menu data={data as ContextMenu}/>
      <FileContent/>
    </div>
  );
}

export default App;
