import React from 'react'
import styled from 'styled-components'

const StSpaceBetween = (props) => {
  const {width, children} = props

  return (
    <Div width={width}>{children}</Div>
  )
}

StSpaceBetween.defaultProps = {
  width: "100%"
};

const Div = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default StSpaceBetween