
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HeaderWithTabs from './components/HeaderWithTabs';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

function App() {
  const [colorScheme, setColorScheme] = useState("light")
  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HeaderWithTabs />} />
          </Routes>
        </div>

      </MantineProvider>
    </ColorSchemeProvider>

  );
}

export default App;
