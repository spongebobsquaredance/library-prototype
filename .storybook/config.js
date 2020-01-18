import React from 'react';
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyles } from './../src/GlobalStyles';
import { themes } from './../src/themes';

const req = require.context('../src/', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
  console.log(req.keys());
}

addDecorator((story) => (
  <ThemeProvider theme={themes.modern}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
