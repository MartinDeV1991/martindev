import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './navBarHeader.css';

const linkedIn = "linkedin.com/in/martindevalois";
const email = "martin_de_v@hotmail.com"

const info = [
    { name: "LinkedIn: ", info: linkedIn, icon: faLinkedin },
    { name: "E-mail: ", info: email, icon: faEnvelope },
]

const NavbarHeader = () => {

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#41729F', padding: '30px', display: 'flex', justifyContent: 'center', zIndex: '1', }}>
            <div style={{ display: 'flex', alignItems: 'center', fontWeight: '900' }}>
                <nav style={{ display: 'flex' }}>
                    <a href="/" style={{ textDecoration: 'none', color: 'white', padding: '20px', borderRight: '1px solid white' }}>Home</a>
                    <a href="https://martins-online-cv.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', padding: '20px', borderRight: '1px solid white' }}>CV</a>
                    <a href="/projects" style={{ textDecoration: 'none', color: 'white', padding: '20px' }}>Projecten</a>
                </nav>
            </div>
            <div className="contact-info" style={{ position: 'absolute', right: '10px', textAlign: 'left' }}>
                {info.map((item, itemIndex) => (
                    <div style={{ marginTop: '10px' }} key={itemIndex}>
                        <span style={{ fontWeight: '500', fontSize: '16px' }}>
                            <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon> {item.info}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavbarHeader
