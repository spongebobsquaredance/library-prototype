import styled from 'styled-components';

export const CallToAction = styled.a`
  background: ${p => p.theme.linkBackground};
  color: ${p => p.theme.linkTextColor};
  display: inline-block;
  font-size: 18px;
  padding: 8px 12px;
  margin-top: 16px;
  text-decoration: none;
`