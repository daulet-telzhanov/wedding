import React, { createElement } from 'react';
import './style.css';
import insta from '../imgs/insta.png';
import gis from '../imgs/gis.png';

type LinksProps = {
    instaLink: string;
    gisLink: string;
}

const Links = ({instaLink, gisLink}:LinksProps) => {

    const onClick = (href:string) => {
        window.open(href, '_blank');
    }

    return <div className='links'>
        <div onClick={() => onClick(instaLink)}>
            <img className='img_link' src={insta} alt="insta" />
        </div>

        <div onClick={() => onClick(gisLink)}>
            <img className='img_link' src={gis} alt="2gis" />
        </div>
    </div>
}

export default Links;