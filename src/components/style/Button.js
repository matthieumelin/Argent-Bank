import React from 'react'

// react router dom
import { Link } from "react-router-dom"
    ;
// styled
import styled from 'styled-components'

// utils
import { Colors } from '../../utils/style/Colors';

export default function Button({ type, text, fullWidth = false, width = "0px", center = false, underline = false, to, handleClick }) {
    switch (type) {
        case "link":
            return (
                <StyledButtonLink
                    underline={underline}
                    to={to}
                    fullWidth={fullWidth}
                    onClick={handleClick}>
                    {text}
                </StyledButtonLink>
            )
        case "button":
            return (
                <StyledButton
                    underline={underline}
                    fullWidth={fullWidth}
                    width={width}
                    center={center}
                    onClick={handleClick}
                    text={text}>
                    {text}
                </StyledButton>
            )
        default:
            break;
    }
}

const StyledButton = styled.button`
display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${Colors.green};
  background-color: ${Colors.green};
  color: #fff;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  width: ${(props) => props.width};
${(props) => props.fullWidth ? `width: 100%;` : ""}
${(props) => props.center ? `margin: 0 auto;` : ""}
${(props) => props.underline ? "text-decoration: underline;" : ""}

&:hover {
    transition: 0.2s;
    background: ${Colors.veryDarkGreen};
}
`;
const StyledButtonLink = styled(Link)`
display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${Colors.green};
  background-color: ${Colors.green};
  color: #fff;
  transition: 0.2s;
  text-align: center;
  text-decoration: ${(props) => props.underline ? "underline" : "none"};

  &:hover {
    transition: 0.2s;
    background: ${Colors.veryDarkGreen};
}

@media (min-width: 720px) {
      width: ${(props) => props.fullWidth ? "100%" : "200px"};
  }
`;