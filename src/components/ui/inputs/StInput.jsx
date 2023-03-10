import React from "react";
import styled from "styled-components";

const StInput = (props) => {
  const { fontSize, width, height, borderRadius, onChange, border, borderColor, margin, name, type, placeholder } = props;
  const styles = { borderRadius, width, height, fontSize, border, borderColor, margin, name, type, placeholder };

  return <Input {...styles} onChange={onChange} />;
};

StInput.defaultProps = {
  borderRadius: "10px",
  fontSize: "15px",
  width: "80%",
  border: "2px",
  height: "2.5rem",
  type: "text",
  placeholder: "",
  borderColor: "#e67700",
};

const Input = styled.input.attrs((props) => ({
  type: props.type,
  placeholder: props.placeholder,
}))`
  border: ${(props) => props.border} solid ${(props) => props.borderColor};
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  text-indent: 10px;
  margin: ${(props) => props.margin};
  name: ${(props) => props.name};
  :focus {
    outline: 2px solid #e67700;
    border: 1px solid transparent;
  }
`;

export default StInput;
