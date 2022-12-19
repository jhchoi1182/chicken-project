import React from "react";
import styled from "styled-components";

const StForm = (props) => {
  const { gap, paddingTop, children, alignItem, width, onSubmit } = props;
  const styles = { gap, paddingTop, alignItem, width };

  return <Section {...styles} onSubmit={onSubmit}>{children}</Section>;
};

StForm.defaultProps = {
  gap: "2rem",
  paddingTop: "1rem",
  alignItem: "",
  width: "100%"
};

const Section = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => props.width};
  align-items: ${(props) => props.alignItem};
  gap: ${(props) => props.gap};
  padding-top: ${(props) => props.paddingTop};
`;

export default StForm;
