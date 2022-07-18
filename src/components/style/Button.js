import React from 'react'

// react router dom
import { Link } from "react-router-dom"
;
// styled
import styled from 'styled-components'

// utils
import { Colors } from '../../utils/style/Colors';

export default function Button({ text, fullWidth = false, center = false, asALink = false, link, handleClick }) {
    if (asALink) {
        return (
            <StyledButtonLink
                to={link}
                fullWidth={fullWidth}
                center={center}
                onClick={handleClick}>
                {text}
            </StyledButtonLink>
        )
    }
    return (
        <StyledButton
            fullWidth={fullWidth}
            center={center}
            onClick={handleClick}>
            {text}
        </StyledButton>
    )
}

const StyledButton = styled.button`
display: block;
margin: 0;
padding: 0.75rem 1.5rem;
border: none;
border-radius: 0.25rem;
color: white;
font-size: 1.2rem;
font-weight: 700;
background: ${Colors.darkGreen};
cursor: pointer;
transition: all 300ms;
${(props) => props.fullWidth ? `width: 100%;` : null}
${(props) => props.center ? `margin: 0 auto;` : null}
  
&:hover {
    background: ${Colors.veryDarkGreen};
}
`;
const StyledButtonLink = styled(Link)`
display: block;
margin: 0;
padding: 0.75rem 1.5rem;
border: none;
border-radius: 0.25rem;
color: white;
font-size: 1.2rem;
font-weight: 700;
background: ${Colors.darkGreen};
cursor: pointer;
transition: all 300ms;
${(props) => props.fullWidth ? `width: 100%;` : null}
${(props) => props.center ? `margin: 0 auto;` : null}
text-decoration: none;

&:hover {
    background: ${Colors.veryDarkGreen};
}
`;