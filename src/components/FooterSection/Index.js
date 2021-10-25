import React from "react";
import {animateScroll as scroll} from "react-scroll";
import { FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink,
        WebsiteRights
    } from "./FooterElem"; 


const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investments</FooterLink>
                                <FooterLink to="/">Business Banking</FooterLink>
                                <FooterLink to="/">Terms Of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Retirement</FooterLinkTitle>
                                <FooterLink to="/">Roth IRA</FooterLink>
                                <FooterLink to="/">Traditional IRA</FooterLink>
                                <FooterLink to="/">401(k)</FooterLink>
                                <FooterLink to="/">403(b)</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Loans</FooterLinkTitle>
                                <FooterLink to="/">Personal Loans</FooterLink>
                                <FooterLink to="/">Mortgages</FooterLink>
                                <FooterLink to="/">Subsidized Loans</FooterLink>
                                <FooterLink to="/">Student Loans</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Mobile</FooterLinkTitle>
                                <FooterLink to="/">Help</FooterLink>
                                <FooterLink to="/">Alerts</FooterLink>
                                <FooterLink to="/">F.A.Q's</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <a href="mailto:emmet.allen@gmail.com" title="emmet.allen@gmail.com" className="email">For Inquires Please Click Here</a>
                <WebsiteRights to="/" onClick={toggleHome}>Royal Navy Capital © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
