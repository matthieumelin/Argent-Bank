import React from 'react'

// styled
import styled from 'styled-components'

export default function Alert({type, message}) {
  return (
    <StyledAlert type={type}>{message}</StyledAlert>
  )
}

const StyledAlert = styled.div`
border-radius: 2px;
color: ${(props) => props.type === "error" ? "red" : "green"};
margin: 20px 0;
`;
