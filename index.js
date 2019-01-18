/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'styled-components';

import App from './src/App';
import { name as appName } from './app.json';
import theme from './src/utils/theme';

const Index = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => Index);
