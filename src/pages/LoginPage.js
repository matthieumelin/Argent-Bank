import React, { useState } from 'react'

// react helmet
import { Helmet } from 'react-helmet-async';

// react router dom
import { Routes } from '../routes/Routes';
import { Navigate } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setToken } from "../redux/reducers";

// axios
import axios from 'axios';

// styled
import styled from 'styled-components'

// utils
import { Colors } from '../utils/style/Colors';
import { Errors } from '../utils/error/Errors';
import { isValidEmail } from '../utils/Formatter';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// components
import Button from '../components/style/Button';
import Alert from '../components/alert/Alert';

export default function LoginPage() {
    // redux
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    // inputs
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    // error
    const [error, setError] = useState("");

    /**
     * Handle inputs change
     * @param {Event} event 
     */
    const handleInput = (event) => {
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value
        });
    }

    /**
     * Handle form submit 
     * @param {Event} event 
     */
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verification
        let tempError = "";

        if (!inputs.email) {
            tempError = Errors.login.email.required;
        } else if (!isValidEmail(inputs.email)) {
            tempError = Errors.login.email.invalid;
        } else if (!inputs.password) {
            tempError = Errors.login.password.required;
        }

        if (tempError) {
            setError(tempError);
        } else {
            const data = { email: inputs.email, password: inputs.password };

            await axios.post("http://localhost:3001/api/v1/user/login", data)
                .then((response) => {
                    const jwt = response.data.body.token;

                    // store data in session storage
                    sessionStorage.setItem("email", inputs.email);
                    sessionStorage.setItem("token", jwt);

                    dispatch(setEmail(inputs.email));
                    dispatch(setToken(jwt));
                }).catch((error) => {
                    setError(error.response.data.message);
                })
        }
    }

    if (token) return <Navigate to={Routes.User} />;

    return (
        <StyledLoginPage>
            <Helmet>
                <title>Argent Bank - Login</title>
            </Helmet>
            <Main>
                <LoginContent>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <Title>Sign In</Title>
                    {error ? <Alert type="error" message={error} /> : null}
                    <LoginForm onSubmit={handleSubmit}>
                        <LoginFormGroup>
                            <LoginFormLabel htmlFor="username">E-mail</LoginFormLabel>
                            <LoginFormInput type="email" id="email" value={inputs.email} onChange={handleInput} />
                        </LoginFormGroup>
                        <LoginFormGroup>
                            <LoginFormLabel htmlFor="password">Password</LoginFormLabel>
                            <LoginFormInput type="password" id="password" value={inputs.password} onChange={handleInput} />
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