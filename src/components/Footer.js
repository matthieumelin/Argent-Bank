import React from 'react'

// styled
import styled from 'styled-components'

// utils
import { Colors } from '../utils/style/Colors'

export default function Footer() {
  return (
    <StyledFooter>
        <FooterCopyright>
            Copyright 2022 Argent Bank
        </FooterCopyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
border-top: 2px solid ${Colors.lightGray};
padding: 2rem 0 1.5rem;
`;
const FooterCopyright = styled.p`
margin: 0;
padding: 0;
`;