import React from "react";

const NavbarHeader = () => {

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#41729F', padding: '30px', display: 'flex', justifyContent: 'center', zIndex: '1' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <nav style={{ display: 'flex' }}>
                    <a href="/" style={{ textDecoration: 'none', color: 'white', padding: '20px', borderRight: '1px solid white' }}>Home</a>
                    <a href="https://www.martindev.nl" style={{ textDecoration: 'none', color: 'white', padding: '20px', borderRight: '1px solid white' }}>CV</a>
                    <a href="/projects" style={{ textDecoration: 'none', color: 'white', padding: '20px' }}>Projecten</a>
                </nav>
            </div>
        </div>
    )
}

export default NavbarHeader