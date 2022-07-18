import React from 'react'

// styled
import styled from 'styled-components'

// components
import UserAccountCard from '../components/user/UserAccountCard';
import Button from '../components/style/Button';

// data
import { UserAccountMock } from "../data/UserAccountMock";

// utils
import { Colors } from '../utils/style/Colors';

export default function UserPage() {
    return (
        <StyledUserPage>
            <Main>
                <Header>
                    <HeaderTitle>Welcome back<HeaderTitleNewLine />Tony Jarvis!</HeaderTitle>
                    <Button type="button" text="Edit Name" width="max-content" center={true} />
                </Header>
                <MainSrOnly>Accounts</MainSrOnly>
                {UserAccountMock.map((userAccount, index) => {
                    return (
                        <UserAccountCard
                            key={`user-account-${index}`}
                            name={userAccount.name}
                            amount={userAccount.amount}
                            status={userAccount.status} />
                    )
                })}
            </Main>
        </StyledUserPage>
    )
}

const StyledUserPage = styled.div``;
const Main = styled.main`
flex: 1;
background-color: ${Colors.darkBlue};
padding: 0.3rem 0;
`;
const MainSrOnly = styled.h2`
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
const Header = styled.div`
color: #fff;
margin-bottom: 2rem;
`;
const HeaderTitle = styled.h1``;
const HeaderTitleNewLine = styled.br``;