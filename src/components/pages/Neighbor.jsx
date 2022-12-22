import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import StBtn from '../ui/buttons/StBtn'

const Neighbor = (neighbor) => {
  const navigate = useNavigate()
  const warpHandler = () => {
    navigate(`/todos/${neighbor.neighbor.userId}`)
  }

  return (
    <ListDiv className="listDiv">
      <label>{neighbor.neighbor.nickname}</label>
      <StBtn width="3.5rem" onClick={warpHandler}>이동</StBtn>
    </ListDiv>
  )
}

const ListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export default Neighbor