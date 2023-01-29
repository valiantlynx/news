
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HeaderWithTabs from './components/HeaderWithTabs';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import NewsPage from './components/NewsPage';
import Trending from './components/Trending';
import { FaqWithImage } from './components/faq';
import { FeaturesCards } from './components/FeaturesCards';

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
            <Route exact path="/newspage" element={<NewsPage/>} />
            <Route exact path="/trending" element={<Trending/>} />
            <Route exact path="/faq" element={<FaqWithImage/> } />
            <Route exact path="/about" element={<FeaturesCards/> } />
          </Routes>
        </div>

      </MantineProvider>
    </ColorSchemeProvider>

  );
}

export default App;
