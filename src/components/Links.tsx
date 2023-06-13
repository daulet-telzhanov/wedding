import React, { createElement } from 'react';
import './style.css';
import insta from '../imgs/insta.png';
import gis from '../imgs/gis.png';

const Links = () => {

    const onClick = (href:string) => {
        window.open(href, '_blank');
    }

    return <div className='links'>
        <div onClick={() => onClick('https://www.instagram.com/altyn.banquethall/')}>
            <img className='img_link' src={insta} alt="insta" />
        </div>

        <div onClick={() => onClick('https://go.2gis.com/hb7me')}>
            <img className='img_link' src={gis} alt="2gis" />
        </div>
    </div>
}

export default Links;