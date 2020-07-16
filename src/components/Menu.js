/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import MenuDropDown from "./MenuDropDown";
import MenuItem from "./MenuItem";

function Menu({ title, items }) {
  const [active, setActive] = useState(false);

  const ItemsContainer = styled.ul`
    display: ${active ? "block" : "none"};
  `;

  const onMenuSelect = () => {
    setActive(!active);
  };

  return (
    <div>
      <MenuDropDown title={title} active={active} onClick={onMenuSelect} />
      <ItemsContainer>
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ItemsContainer>
    </div>
  );
}

export default Menu;
