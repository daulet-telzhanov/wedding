import React from 'react';
import './style.css';
import avatar_img from '../imgs/avatar.jpg';

const Avatar = () => {

    return <div className='avatar'>
        <img className='avatar_img' src={avatar_img} alt="avatar"/>
    </div>
};

export default Avatar;
