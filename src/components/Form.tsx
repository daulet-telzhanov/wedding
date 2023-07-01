import { Input, Button, Row, Col, Radio } from 'antd';
import React from 'react';
import Text from '../components/Text';
import { toast } from 'react-hot-toast';

type FormProps = {
    fetchUrl: string
}

const Form = ({fetchUrl}:FormProps) => {
    const [willGo, setWillGo] = React.useState('');
    const [guests, setGuests] = React.useState(['']);
    
    const onSubmit = () => {
        const filteredGuests = guests.filter(g =>  typeof g === 'string' && !!g.trim());

        const guestObj = filteredGuests.map(g => ({
            Name: g,
            time: new Date()
        }))

        setWillGo('');
        setGuests(['']);
        toast.success('Жауабыңызға рақмет!');

        fetch(fetchUrl, {
	        method: "POST",
	        body: JSON.stringify({"data": guestObj}),
        })
    }

    const hanldeChange = (value:string = '', index:number) => {
        setGuests(prevState => {
            return prevState.map((g, i) => {
                if (i === index) {
                    return value;
                }
                return g
            });
        })
    }

    const addButton = () => {
        setGuests(prevState => [...prevState, '']);
    }

    const handleDelete = (index: number) => {
        setGuests(prevState => prevState.filter((_, i) => index !== i));
    }


    return <div className='form'>
        <Text fontSize={1.7} mb={1}>
            Тойға келеcіз бе?
        </Text>

        <Radio.Group 
            defaultValue="a" 
            size="large" 
            style={{display: 'flex', justifyContent: 'center', marginBottom: '3vh'}}
            value={willGo}
            onChange={(event) => {
                const {value} = event.target;
                setWillGo(value);
            }}
        >
            <Radio.Button value="уes" style={{flexGrow: 1, maxWidth: '200px'}}>Иә</Radio.Button>
            <Radio.Button value="no" style={{flexGrow: 1, maxWidth: '200px'}}>Жоқ</Radio.Button>
        </Radio.Group>

        {
            willGo === 'уes' && <>
                <Text fontSize={1.6}>
                    Тойға келетін қонақтардың тізімін жазыңыз
                </Text>
                {
                    guests.map((value, index) => (
                        <Row align='middle' style={{marginBottom: '8px'}}>
                            <Col span={2}>
                                {index + 1}.
                            </Col>

                            <Col span={guests.length === 1 ? 22 : 16}>
                                <Input
                                    value={value} 
                                    placeholder='Аты-жөні' 
                                    size='large'
                                    onChange={(event) => {
                                        const {value} = event.target;
                                        hanldeChange(value, index);
                                    }}
                                />
                            </Col>

                            {guests.length > 1 && <Col span={6}>
                                <Button
                                    shape="round"
                                    onClick={() => {
                                        handleDelete(index)
                                    }}
                                >
                                    Өшіру
                                </Button>
                            </Col>}
                        </Row>

                    ))
                }


                <div style={{marginBottom: '5vh'}}>
                    <Button
                        shape="round"
                        onClick={addButton}
                        size='large'
                    >
                        Қосу
                    </Button>   
                </div>

                <div>
                    <Button
                        size='large'
                        shape="round"
                        onClick={onSubmit}
                    >
                        Тізімді жіберу
                    </Button>  
                </div>
            </>
        }
    </div>
}

export default Form;
