import React, { useState } from 'react'

// react router dom
import { Navigate } from 'react-router-dom';
import { Routes } from '../routes/Routes';

// redux
import { useSelector } from 'react-redux';

// styled
import styled from 'styled-components'

// components
import UserAccountCard from '../components/user/UserAccountCard';
import Button from '../components/style/Button';
import Alert from '../components/alert/Alert';

// data
import { UserAccountMock } from "../data/UserAccountMock";

// utils
import { Colors } from '../utils/style/Colors';

// axios
import axios from 'axios';

export default function UserPage() {
    const token = useSelector((state) => state.user.token);

    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: ""
    })
    const [editNameMode, setEditNameMode] = useState(false);
    const [success, setSuccess] = useState("");

    const toggleEditNameMode = () => {
        setSuccess("");
        setEditNameMode(!editNameMode);
    }

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

        if (!inputs.firstname || !inputs.lastname) return;

        const data = { firstName: inputs.firstname, lastName: inputs.lastname };
        const header = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }

        await axios.put("http://localhost:3001/api/v1/user/profile", data, { headers: header })
            .then((response) => {
                setSuccess(response.data.message);
                setEditNameMode(false);
                setInputs({firstname: "", lastname: ""});
            }).catch(console.error);
    }


    if (!token) return <Navigate to={Routes.Home} />

    return (
        <StyledUserPage>
            <Main>
                <Header>
                    <HeaderTitle>Welcome back</HeaderTitle>
                    {!editNameMode ? <>
                        {success ? <Alert type="success" message={success} /> : null}
                        <Button type="button" text="Edit Name" width="max-content" center={true} handleClick={() => toggleEditNameMode()} />
                    </>
                        :
                        <HeaderForm onSubmit={handleSubmit}>
                            <HeaderFormWrapper>
                                <HeaderFormGroupLeft>
                                    <HeaderFormGroupInput type="text" id="firstname" value={inputs.firstname} placeholder="Tony" onChange={handleInput} />
                                    <Button type="button" text="Save" width="max-content" />
                                </HeaderFormGroupLeft>
                                <HeaderFormGroupRight>
                                    <HeaderFormGroupInput type="text" id="lastname" value={inputs.lastname} placeholder="Jarvis" onChange={handleInput} />
                                    <Button type="button" text="Cancel" width="max-content" handleClick={() => setEditNameMode(false)} />
                                </HeaderFormGroupRight>
                            </HeaderFormWrapper>
                        </HeaderForm>
                    }
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
const HeaderForm = styled.form`
`;
const HeaderFormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`;
const HeaderFormGroupLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;
const HeaderFormGroupRight = styled.div`
`;
const HeaderFormGroupInput = styled.input`
padding: 5px;
font-size: 1.2rem;
width: 100%;
min-width: 100%;
box-sizing: border-box;
`;