import React from "react";
import styled from "styled-components";

const StInput = (props) => {
  const { fontSize, width, height, borderRadius, onChange } = props;
  const styles = { borderRadius, width, height, fontSize };

  return <Input {...styles} onChange={onChange} />;
};

StInput.defaultProps = {
  borderRadius: "10px",
  fontSize: "10px",
  width: "80%",
  height: "2.5rem",
};

const Input = styled.input`
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  ::placeholder {
    
    opacity: 1;
  }
`;

export default StInput;
