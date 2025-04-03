import 'react-native-gesture-handler';
import React from 'react';
import {Routes} from './src/routes';
import {ThemeProvider} from './src/context/ThemeContext';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

function App(): React.JSX.Element {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
