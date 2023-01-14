
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Button } from '@mantine/core';
import HeaderWithTabs from './components/HeaderWithTabs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HeaderWithTabs />} />
      </Routes>
    </div>
  );
}

export default App;
