import React from "react";
import styled from "styled-components";

const StSection = (props) => {
  const { gap, paddingTop, children } = props;
  const styles = { gap, paddingTop };

  return <Section {...styles}>{children}</Section>;
};

StSection.defaultProps = {
  gap: "2rem",
  paddingTop: "1rem",
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.gap};
  padding-top: ${(props) => props.paddingTop};
`;

export default StSection;
