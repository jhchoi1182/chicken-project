import React from "react";
import styled from "styled-components";

const StBtn = (props) => {
  const {
    border,
    color,
    borderColor,
    fontSize,
    width,
    height,
    borderRadius,
    backgroundColor,
    onClick,
    children,
    margin,
    type,
    disabled,
    hoverColor,
    hoverBorder,
    weight,
  } = props;
  const styles = {
    color,
    border,
    borderRadius,
    borderColor,
    width,
    height,
    backgroundColor,
    fontSize,
    margin,
    type,
    disabled,
    hoverColor,
    hoverBorder,
    weight,
  };

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
  width: "10rem",
  height: "2.5rem",
  type: "button",
  disabled: false,
  hoverBorder: "3px",
  borderColor: "#e67700",
  weight: "700",
  backgroundColor: "rgba(253, 126, 20, 0.4)",
  hoverColor: "#e67700",
  color: "#343a40",
};

const Button = styled.button.attrs((props) => ({
  type: props.type,
  disabled: props.disabled,
}))`
  border: ${(props) => props.border} solid ${(props) => props.borderColor};
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.weight};
  :hover {
    cursor: pointer;
    border: ${(props) => props.hoverBorder} solid ${(props) => props.hoverColor};
  }
`;

export default StBtn;
