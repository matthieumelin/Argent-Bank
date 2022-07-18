import React from 'react'

// react router dom
import { Link } from 'react-router-dom';

// styled components
import styled from 'styled-components'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// assets
import ArgentBankLogo from "../assets/argent-bank-logo.png";

// utils
import { Colors } from '../utils/style/Colors';

export default function Header() {
    return (
        <StyledHeader>
            <Navbar>
                <NavbarLogo to="/">
                    <NavbarLogoImage
                        src={ArgentBankLogo}
                        alt="Argent Bank Logo"
                    />
                </NavbarLogo>
                <NavbarSrOnly>Argent Bank</NavbarSrOnly>
                <NavbarList>
                    <NavbarListItem>
                        <NavbarListItemLink to="/login">
                            <FontAwesomeIcon icon={faUserCircle} style={{marginRight: "0.5rem"}} />
                            Sign In
                        </NavbarListItemLink>
                    </NavbarListItem>
                </NavbarList>
            </Navbar>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`

`;

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
`;
const NavbarLogo = styled(Link)`
display: flex;
align-items: center;
`;
const NavbarLogoImage = styled.img`
max-width: 100%;
width: 200px;
`;
const NavbarSrOnly = styled.h1`
border: 0 !important;
clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
-webkit-clip-path: inset(50%) !important;
clip-path: inset(50%) !important; /* 2 */
height: 1px !important;
margin: -1px !important;
overflow: hidden !important;
padding: 0 !important;
position: absolute !important;
width: 1px !important;
white-space: nowrap !important; /* 3 */
`;
const NavbarList = styled.ul`
margin: 0;
padding: 0;
display: flex;
list-style-type: none;
`;
const NavbarListItem = styled.li`
text-decoration: none;
margin: 0 0.5rem;
&:hover {
    text-decoration: underline;
}
`;
const NavbarListItemLink = styled(Link)`
font-weight: 700;
text-decoration: none;
color: ${Colors.neutral};
&:hover {
  text-decoration: underline;
} 
`;