import React from 'react'
import styled from 'styled-components'

const StSpaceBetween = (props) => {
  const {width, children, justifyContent} = props
  const styles = {width, children, justifyContent}

  return (
    <Div {...styles}>{children}</Div>
  )
}

StSpaceBetween.defaultProps = {
  width: "100%",
  justifyContent: "space-between"
};

const Div = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  `

export default StSpaceBetween