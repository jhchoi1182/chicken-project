import React from "react";
import styled from "styled-components";

const StBtn = (props) => {
  const { border, color, borderColor, fontSize, width, height, borderRadius, backgroundColor, onClick, children } = props;
  const styles = { color, border, borderRadius, borderColor, width, height, backgroundColor, fontSize };

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
};

const Button = styled.button`
  border: ${(props) => props.border} solid ${(props) => props.borderColor};
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

export default StBtn;
