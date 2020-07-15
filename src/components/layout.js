import styled from "@emotion/styled";

export const Layout = styled.div`
  background-color: #f0f2f5;
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 64px auto 64px;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
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
  border: 1px solid #d9d9d9;
  display: flex;
  padding: 16px 24px;
  grid-area: header;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #262626;
`;

export const Sidebar = styled.aside`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  grid-area: sidebar;
`;

export const Main = styled.main`
  background: #ffffff;
  border-radius: 2px;
  height: auto;
  margin: 24px 24px 0 24px;
  grid-area: main;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;
