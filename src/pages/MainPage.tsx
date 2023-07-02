import React, { ReactNode } from 'react';
import Avatar from '../components/Avatar';
import fl_border from '../imgs/border.png';
import Text from '../components/Text';
import Time from '../components/Time';
import Links from '../components/Links';
import Form from '../components/Form';

import './style.css';
import { ColorHex } from 'react-countdown-circle-timer';

export type MainPageProps = {
    img: string,
    texts: ReactNode[],
    instaLink: string;
    gisLink: string;
    timestamp: number;
    fetchUrl: string;
    bgColor: string;
    mainTxtColor: ColorHex;
    borderImg: string;
}

const MainPage = ({img, texts, instaLink, gisLink, timestamp, fetchUrl, bgColor, mainTxtColor, borderImg}:MainPageProps) => {

    return <div className='main_container' style={{backgroundColor: bgColor}}>
        <Avatar img={img}/>

        <Text mb={3}>
            {texts[0]}
        </Text>

        <Text fontSize={1.7}>
            {texts[1]}
        </Text>

        <Text className='aibala' color={mainTxtColor}>
            {texts[2]}
        </Text>

        <div className='border_wrapper'>
            <img src={borderImg} alt="border" className='border'/>
        </div>

        <Text mb={3.5} fontSize={1.7}>
            {texts[3]}
        </Text>

        <Text mb={3} color={mainTxtColor} wh={900}>
            {texts[4]}
        </Text>

        <Text>
            {texts[5]}
        </Text>

        <Text fontSize={1.5}>
            {texts[6]}
        </Text>

        <Links
          gisLink={gisLink}
          instaLink={instaLink}
        />

        <Text fontSize={2.2}>
            {texts[7]}
        </Text>

        <Text fontSize={1.7} mb={2.5}>
            {texts[8]}
        </Text>

        <Text fontSize={1.5} mb={1}>
            {texts[9]}
        </Text>

        <Time
            color={mainTxtColor}
            timestamp={timestamp}
        />

        <Form
            fetchUrl={fetchUrl}
        />
    </div>
};

export default MainPage;