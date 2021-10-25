import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from "../ButtonElem";
import{ HeroContainer,
        HeroBg,
        VideoBg,
        HeroContent,
        HeroH1,
        Herop,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight
    } from './HeroElem'

const HeroSection = () => {

    const[hover,setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>The Bank You Trust</HeroH1>
                <Herop>
                    Refer friends and family to receive up to $100 to your account.
                </Herop>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Click Here to Get Started
                        {hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
