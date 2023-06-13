import React from 'react';
import Avatar from '../components/Avatar';
import fl_border from '../imgs/border.png';
import Text from '../components/Text';
import Time from '../components/Time';
import Links from '../components/Links';
import Form from '../components/Form';
import './style.css';

const MainPage = () => {

    return <div className='main_container'>
        <Avatar/>

        <Text mb={3}>
            Құрметті ағайын-туыс, <br/> құда-жекжат, дос-жаран!        
        </Text>

        <Text fontSize={1.7}>
            Сіздерді аяулы қызымыз    
        </Text>

        <Text className='aibala'>
            Айбаланың
        </Text>

        <div className='border_wrapper'>
            <img src={fl_border} alt="border" className='border'/>
        </div>

        <Text mb={3.5} fontSize={1.7}>
            Ұзату тойына арналған <br/>
            ақ дастарханымыздың қадірлі <br/>
            қонағы болуға шақырамыз!
        </Text>

        <Text mb={3} color='#e29578' wh={900}>
            22 шілде, 2023 | 18:00
        </Text>

        <Text>
            Altyn Banquet Hall
        </Text>

        <Text fontSize={1.5}>
            ​Алматы қаласы, Ашимова көшесі 241
        </Text>

        <Links/>

        <Text fontSize={1.5}>
            Той йелері:
        </Text>

        <Text fontSize={1.7} mb={2.5}>
            Серікбай - Жанна
        </Text>

        <Text fontSize={1.5} mb={1}>
            Тойдың басталуына:
        </Text>

        <Time/>

        <Form/>
    </div>
};

export default MainPage;