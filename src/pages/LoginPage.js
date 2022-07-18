import React from 'react'

// styled
import styled from 'styled-components'

// colors
import { Colors } from '../utils/style/Colors';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// components
import Button from '../components/style/Button';

export default function LoginPage() {
    return (
        <StyledLoginPage>
            <Main>
                <LoginContent>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <Title>Sign In</Title>
                    <LoginForm>
                        <LoginFormGroup>
                            <LoginFormLabel htmlFor="username">Username</LoginFormLabel>
                            <LoginFormInput type="text" id="username" />
                        </LoginFormGroup>
                        <LoginFormGroup>
                            <LoginFormLabel htmlFor="password">Password</LoginFormLabel>
                            <LoginFormInput type="password" id="password" />
                        </LoginFormGroup>
                        <LoginFormGroupRemember>
                            <LoginFormInputRemember type="checkbox" id="remember-me" />
                            <LoginFormLabelRemember htmlFor="remember-me">Remember me</LoginFormLabelRemember>
                        </LoginFormGroupRemember>
                        <Button type="button" fullWidth={true} text="Sign In" underline={true} />
                    </LoginForm>
                </LoginContent>
            </Main>
        </StyledLoginPage>
    )
}

const StyledLoginPage = styled.div``;
const Main = styled.main`
background-color: ${Colors.darkBlue};
padding: 2.4rem 0;
`;
const LoginContent = styled.section`
box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
`;
const Title = styled.h1``;
const LoginForm = styled.form`

`;
const LoginFormGroup = styled.div`
display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;
const LoginFormGroupRemember = styled.div`
display: flex;
`;
const LoginFormLabel = styled.label`
font-weight: bold;
`;
const LoginFormLabelRemember = styled.label`
margin-left: 0.25rem;
`;
const LoginFormInput = styled.input`
padding: 5px;
font-size: 1.2rem;
`;
const LoginFormInputRemember = styled.input`
display: flex;
flex-direction: column;
text-align: left;
margin-bottom: 1rem;
`;