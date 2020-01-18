import React from 'react';
import { storiesOf } from '@storybook/react';

import { SummaryCard } from './SummaryCard';

storiesOf('SummaryCard', module)
  .add('SummaryCard', () => <SummaryCard 
    headerText='Hello World Header One'
    summaryText='Lorem ipsum dolor sit amet.'
    href='https://google.com'
    linkText='Subscribe!!'
  />);