import styled from "@emotion/styled";

export const Layout = styled.div`
  background-color: #f0f2f5;
  box-sizing: border-box;
  display: grid;
  min-height: 100vh;
  overflow: auto;
  grid-template-columns: 250px auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "sidebar footer";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #595959;
`;

export const Header = styled.header`
  background: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  padding: 0 15px;
  grid-area: header;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
`;

export const Sidebar = styled.aside`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
`;

export const Main = styled.main`
  background: #ffffff;
  border-radius: 2px;
  height: auto;
  margin: 30px 30px 0 30px;
  grid-area: main;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
