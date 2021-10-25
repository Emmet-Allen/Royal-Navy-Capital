import React from 'react'
import { SignInContainer,
    SignInWrapper,
    Icon,
    SignInContent,
    SignInForm,
    SignInHeading,
    SignInLabel,
    SignInInput,
    SignInButton,
} from './SigninElem'

const SignIn = () => {
    return (
        <div>
            <SignInContainer>
                <SignInWrapper>
                    <Icon to='/'>Royal Navy Capital</Icon>
                        <SignInContent>
                            <SignInForm>
                                <SignInHeading> Sign-In </SignInHeading>
                                <SignInLabel htmlFor='for'> Email </SignInLabel>
                                <SignInInput type="email" required/>
                                <SignInLabel htmlFor='for'> Password </SignInLabel>
                                <SignInInput type="password" required/>
                                <SignInButton type="submit">Log-In</SignInButton>
                                <a href="mailto:emmet.allen@gmail.com" title="emmet.allen@gmail.com" className="email">Forgot Password</a>
                            </SignInForm>
                        </SignInContent>
                </SignInWrapper>
            </SignInContainer>
        </div>
    )
}

export default SignIn
