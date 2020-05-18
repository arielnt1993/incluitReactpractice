import React from 'react';

function click(url){
    console.log(url);
}

function Navbar(){
    return <nav className="navbar">
        <ul className="navBarContent">
            <li onClick={click('acerca de')}>acerca de</li>
            <li onClick={click('mi experiencia')}>mi experiencia</li>
            <li onClick={click('contacto')}>contacto</li>
        </ul>
        </nav>;
}

export default Navbar;