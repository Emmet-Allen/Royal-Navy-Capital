import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/Index';
import Navbar from '../components/NavBar'
import Sidebar from '../components/Sidebar/Index'
import Info from '../components/InfoSection/Index';
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import Services from '../components/Services/Index';
import Footer from '../components/FooterSection/Index';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <Info{...homeObjOne}/>
            <Info{...homeObjTwo}/>
            <Info{...homeObjThree}/>
            <Services/>
            <Footer/>
        </div>
    )
}

export default Home;
