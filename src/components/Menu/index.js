import React from 'react';
import Logo from '../../assets/img/blackfix.png'
import './Menu.css'
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Popflix Logo"></img>
            </a>

            <Button as="a" href="/">
                Novo vídeo
                </Button>
        </nav>
    );
}

export default Menu;