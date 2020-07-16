import React from 'react';
import styled from '@emotion/styled';
import Reacticon from '../assets/react-icon.svg';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const LogoTitle = styled.h1`
  margin-left: 8px;
  color: #262626;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <img src={Reacticon} alt="react-icon" width="24px" />
      <LogoTitle>React Showcase</LogoTitle>
    </LogoContainer>
  );
}
