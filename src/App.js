import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { SummaryCard } from './components/SummaryCard/SummaryCard';
import { themes } from './themes';

const App = () => {
  return (
    <ThemeProvider theme={themes.modern}>
      <GlobalStyles />
      <SummaryCard
        ctaText="Subscribe!!"
        headerText="Primary Header Text" 
        summaryText="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
        linkText="Subscribe!!"
        href="https://google.com"
      />
    </ThemeProvider>
  );
};

export default App;
