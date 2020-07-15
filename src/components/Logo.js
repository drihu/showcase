/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Reacticon from "../assets/react-icon.svg";

function Logo() {
  const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #262626;
    /* padding: 24px; */
  `;

  return (
    <LogoContainer>
      <img src={Reacticon} alt="react-icon" width="36px" />
      <p css={{ marginLeft: "8px" }}>React Showcase</p>
    </LogoContainer>
  );
}

export default Logo;
