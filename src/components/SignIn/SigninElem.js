import styled from "styled-components";
import {Link as LinkRouter} from "react-router-dom";

export const SignInContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: #f8f8ff;
`;

export const SignInWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const Icon = styled(LinkRouter)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #000099;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const SignInContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const SignInForm = styled.form`
    background: #000099;
    max-width: 400px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 500px){
        padding: 32px 32px; 
        width: 80%;
    }
`;

export const SignInHeading = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
`;

export const SignInLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const SignInInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const SignInButton = styled.button`
    background: #f1f104fd;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #000;
    font-family: 'Lora', serif;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        cursor: pointer;
    }
`;