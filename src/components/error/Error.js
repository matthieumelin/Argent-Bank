import React from 'react'

// styled
import styled from 'styled-components'

export default function Error({message}) {
  return (
    <StyledError>{message}</StyledError>
  )
}

const StyledError = styled.div`
border-radius: 2px;
color: red;
`;
