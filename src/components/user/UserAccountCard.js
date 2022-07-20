import React from 'react'

// react router dom
import { Routes } from '../../routes/Routes';

// styled
import styled from 'styled-components'

// components
import Button from '../style/Button';

// utils
import { format } from '../../utils/Formatter';

export default function UserAccountCard({ name, amount, status }) {
  return (
    <StyledUserAccountCard>
      <UserAccountWrapper>
        <UserAccountTitle>{name}</UserAccountTitle>
        <UserAccountAmount>${format(amount)}</UserAccountAmount>
        <UserAccountDescription>{status} Balance</UserAccountDescription>
      </UserAccountWrapper>
      <UserAccountWrapperActions>
        <Button
          text="View transactions"
          type="button"
          width="200px"
          to={Routes.User} />
      </UserAccountWrapperActions>
    </StyledUserAccountCard>
  )
}

const StyledUserAccountCard = styled.article`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
background-color: #fff;
width: 80%;
margin: 0 auto;
flex-direction: column;
padding: 1.5rem;
box-sizing: border-box;
text-align: left;
margin-bottom: 2rem;

@media (min-width: 720px) {
    flex-direction: row;
}
`;
const UserAccountWrapper = styled.div`
width: 100%;
flex: 1;
`;
const UserAccountTitle = styled.h3`
margin: 0;
padding: 0;
font-size: 1rem;
font-weight: normal;
`;
const UserAccountAmount = styled.p`
margin: 0;
font-size: 2.5rem;
font-weight: bold;
`;
const UserAccountDescription = styled.p`
margin: 0;
`;
const UserAccountWrapperActions = styled.div`
width: 100%;
@media (min-width: 720px) {
  flex: 0;
}
`;