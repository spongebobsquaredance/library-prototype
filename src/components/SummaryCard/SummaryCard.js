import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardContainer } from './CardContainer/CardContainer';
import { CallToAction } from '../Global/CallToAction/CallToAction';

const HeaderOne = styled.h1`
  color: ${p => p.theme.primaryTextColor};
`
const SummaryText = styled.p`
  color: ${p => p.theme.primaryTextColor};
`

export const SummaryCard = ({ href, linkText, headerText, summaryText}) => 
  <div className="summary-card">
    <CardContainer>
      <HeaderOne>{headerText}</HeaderOne>
      <SummaryText>{summaryText}</SummaryText>
      <CallToAction href={href}>{linkText}</CallToAction>
    </CardContainer>
  </div>

SummaryCard.propTypes ={
  href: PropTypes.string,
  linkText: PropTypes.string,
  headerText: PropTypes.string,
  summaryText: PropTypes.string
}