import React from 'react'

// router
import Routes from "../routes/Routes";

// styled
import styled from 'styled-components'

// utils
import { Colors } from '../utils/style/Colors';

// components
import Button from "../components/style/Button";

export default function Error404Page() {
  return (
    <StyledError404Page>
      <Main>
        <Container>
          <Title>404</Title>
        </Container>
        <Container>
          <Description>Sorry, we can't find any web page for this address.</Description>
          <Button
            text="Back to home page"
            fullWidth={true}
            type="link"
            to="/" />
        </Container>
      </Main>
    </StyledError404Page>
  )
}

const StyledError404Page = styled.div`
padding: 3rem;
background: ${Colors.darkBlue};
`;
const Main = styled.main`
display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
width: 50%;
padding: 6rem;
`;
const Title = styled.h2`
font-size: 8rem;
color: white;
`;
const Description = styled.p`
margin: 2rem 4rem;
font-size: 1.2rem;
color: white;
`;