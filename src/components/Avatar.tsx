import React from 'react';
import './style.css';

export type AvatarProps = {
    img: string
}

const Avatar = ({img}:AvatarProps) => {

    return <div className='avatar'>
        <img className='avatar_img' src={img} alt="avatar"/>
    </div>
};

export default Avatar;
