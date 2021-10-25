import React from 'react';
import { ServicesContainer, 
        ServicesH1, 
        ServicesWrapper, 
        ServicesCard, 
        ServicesIcon, 
        ServicesH2, 
        ServicesP} from './ServiceElem';
import icon1 from '../../images//yellow-pie.svg'
import icon2 from '../../images/blue_business_chat.svg'
import icon3 from '../../images/yellow_purchase.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}/>
                        <ServicesH2>Monthly Reports</ServicesH2>
                        <ServicesP>Get your monthly account reports. Choose our paperless option to help us stay green.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>Take advantage of our Virtual Offices, personalized by your finanace choices.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                        <ServicesH2>Exclusive Benefits</ServicesH2>
                        <ServicesP>By being a memeber, you will have access to hundrers of discounts and member exclusive stores.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services; 