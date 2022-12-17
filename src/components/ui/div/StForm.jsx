import React from "react";
import styled from "styled-components";

const StForm = (props) => {
  const { gap, paddingTop, children, alignItem } = props;
  const styles = { gap, paddingTop, alignItem };

  return <Section {...styles}>{children}</Section>;
};

StForm.defaultProps = {
  gap: "2rem",
  paddingTop: "1rem",
  alignItem: "",
};

const Section = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${(props) => props.alignItem};
  gap: ${(props) => props.gap};
  padding-top: ${(props) => props.paddingTop};
`;

export default StForm;
