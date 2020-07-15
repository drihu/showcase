/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 9px 16px 9px 48px;
  font-size: 14px;
  line-height: 22px;
  color: #595959;
  margin-bottom: 8px;
  text-decoration: none;
  &:hover {
    color: #1890ff;
  }
`;

function MenuItem({ item: { title = "Text", dest = "/" }, onSelect }) {
  return (
    <StyledNavLink
      to={dest}
      activeStyle={{
        color: "#1890FF",
        backgroundColor: "#E6F7FF",
        borderRight: "3px solid #1890FF",
      }}
      onClick={() => onSelect(title)}
    >
      {title}
    </StyledNavLink>
  );
}

export default MenuItem;
