import React from 'react';
import { Toaster } from 'react-hot-toast';
import MainPage from './pages/MainPage';
import avatar_img from './imgs/avatar_2.png';
import border_img from './imgs/border_wedding.png';

const Wedding = () => {

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
          bgColor='#F5F5F5'
          mainTxtColor='#3F2305'
          img={avatar_img}
          instaLink='https://www.instagram.com/skyhallalmaty/'
          gisLink='https://go.2gis.com/2wjea'
          fetchUrl='https://api.apispreadsheets.com/data/KUEVGV7kHXDmlEWO/'
          timestamp={1692356400}
          texts={[
            <>
              Құрметті ағайын-туыс, <br/> құда-жекжат, дос-жаран!        
            </>,
            <>
              Сіздерді балаларымыз 
            </>,
            <>
              Дәулет <br/>
              пен <br/>
              Айбаланың
            </>,
            <>
              Шаңырақ көтеру тойына арналған <br/>
              салтанатты ақ дастарханымыздың қадірлі <br/>
              қонағы болуға шақырамыз!
            </>,
            <>
              18 тамыз, 2023 | 17:00
            </>,
            <>
              Sky Hall
            </>,
            <>
              ​Алматы қаласы, ​Улица Кожабекова, 21/1
            </>,
            <>
              Той йелері:
            </>,
            <>
              Жандос - Ғазима
            </>,
            <>
              Тойдың басталуына:
            </>
          ]}
        />
      </div>
    )
};

export default Wedding;