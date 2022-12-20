import React from "react";
import styled from "styled-components";

const StBtn = (props) => {
  const { border, color, borderColor, fontSize, width, height, borderRadius, backgroundColor, onClick, children, margin, type, disabled, hoverColor, hoverBorder } = props;
  const styles = { color, border, borderRadius, borderColor, width, height, backgroundColor, fontSize, margin, type, disabled, hoverColor, hoverBorder };

  return (
    <Button {...styles} onClick={onClick}>
      {children}
    </Button>
  );
};

StBtn.defaultProps = {
  border: "2px",
  borderRadius: "10px",
  fontSize: "1rem",
  backgroundColor: "white",
  width: "9rem",
  height: "2.5rem",
  type: "button",
  disabled: false,
  hoverBorder: "2px"
};

const Button = styled.button.attrs(props => ({
  type: props.type,
  disabled: props.disabled
}))`
  border: ${(props) => props.border} solid ${(props) => props.borderColor};
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  :hover {
    cursor: pointer;
    border: ${(props) => props.hoverBorder} solid ${(props) => props.hoverColor};
  }
  
`;

export default StBtn;
