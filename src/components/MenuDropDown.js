/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ReactComponent as DropIcon } from "../assets/vectordrop.svg";
import { ReactComponent as StarSVG } from "../assets/Vectorstart.svg";

const DropDownContainer = styled.div`
  padding: 9px 24px;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    path {
      fill: #595959;
    }
  }
  &:hover {
    color: #1890ff;
    svg {
      path {
        fill: #1890ff;
      }
    }
  }
`;

const Icon = styled.div`
  flex-grow: 0;
  display: flex;
  justify-items: center;
`;

const Text = styled.p`
  flex-grow: 1;
  margin-left: 8px;
`;

function MenuDropDown({ title = "Text", active, onClick }) {
  return (
    <DropDownContainer active={active} onClick={onClick}>
      <Icon>
        <StarSVG />
      </Icon>
      <Text>{title}</Text>
      <Icon
        css={css`
          transform: ${active ? "rotate(180deg)" : "unset"};
        `}
      >
        <DropIcon />
      </Icon>
    </DropDownContainer>
  );
}

export default MenuDropDown;
