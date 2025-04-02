import React from 'react';
import {Routes} from './src/routes';
import {ThemeProvider} from './src/context/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
