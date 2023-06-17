import React from 'react'
import { useState } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const expRegEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
const expRegPassword = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/

const DisplayContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 25rem;
`

const FormContainer = styled.div`
background-color: #494949;
width: 200px;
display: flex;
justify-content: center;

`
const LogForm = styled.form`

`
const LabelForm = styled.label`
justify-self: left;
display: flex;
margin-left: 11px;
`
const LabelError = styled.label`
justify-self: left;
display: flex;
color: red;
font-size: small;
margin-left: 11px;
`




export default function Login({onLogin}){

    const [userData, setUserData] = useState(
        {email:"",
        password:""})

    const [inputErrors, setInputErrors] = useState(
        {email:"",
        password:""})
    

    function handleSubmit(event){
        event.preventDefault()
        console.log("submit")
        if(!onLogin(userData)) console.log("Usuario incorrecto")
    }

    function handleChange(event){

        const _input = {...userData,[event.target.name]: event.target.value}
        setUserData(_input)  
        setInputErrors(validation(_input))

    }

    

    function validation(inputs){
        let errors = {email:"",password:""}

        if (!expRegEmail.test(inputs.email)) errors.email = "El email es invalido"
        if (!inputs.email) errors.email = "Email ..."

        if (!expRegPassword.test(inputs.password)) errors.password = "Letra minúscula y almenos una mayúscula, un número, un carácter especial. Mínimo 8 dígitos"
        if (expRegPassword.test(inputs.password)) errors.password = "Password seguro"
        if (!inputs.password) errors.password = "Pasword ..."
        
        return errors
    }

    return (
     <DisplayContainer>
        <FormContainer>
            <LogForm >

                <LabelForm>EMAIL</LabelForm>
                <input
                type="text" 
                name='email'
                value={userData.email}
                onChange={handleChange}
                ></input>
                <LabelError>{inputErrors.email}</LabelError>

                <LabelForm>PASSWORD</LabelForm>
                <input 
                type="password"
                name='password'
                value={userData.password}
                onChange={handleChange}
                ></input>
                <LabelError>{inputErrors.password}</LabelError>

                <button onClick={handleSubmit}>Submit</button>
            </LogForm >
        </FormContainer>
     </DisplayContainer>

    )
}
