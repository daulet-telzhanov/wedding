import React from 'react';
import MainPage from './pages/MainPage';
import { Toaster } from 'react-hot-toast';
import avatar_img from './imgs/avatar.png';
import './App.css';
import border_img from './imgs/border.png';

function App() {
  return (
    <div className="App">
      <div>
        <Toaster 
          position="top-center"
          reverseOrder={false}
          />
        </div>
      <MainPage
        borderImg={border_img}
        bgColor='#fff5ee'
        mainTxtColor='#e29578'
        img={avatar_img}
        instaLink='https://www.instagram.com/altyn.banquethall/'
        gisLink='https://go.2gis.com/hb7me'
        fetchUrl='https://api.apispreadsheets.com/data/fqvxlGdISTiFTm4y/'
        timestamp={1690027200}
        texts={[
          <>
            Құрметті ағайын-туыс, <br/> құда-жекжат, дос-жаран!        
          </>,
          <>
            Сіздерді аяулы қызымыз    
          </>,
          <>
            Айбаланың
          </>,
          <>
            Ұзату тойына арналған <br/>
            ақ дастарханымыздың қадірлі <br/>
            қонағы болуға шақырамыз!
          </>,
          <>
            22 шілде, 2023 | 18:00
          </>,
          <>
            Altyn Banquet Hall
          </>,
          <>
            ​Алматы қаласы, Ашимова көшесі 241
          </>,
          <>
            Той йелері:
          </>,
          <>
            Серікбай - Жанна
          </>,
          <>
            Тойдың басталуына:
          </>
        ]}
      />
    </div>
  );
}

export default App;
