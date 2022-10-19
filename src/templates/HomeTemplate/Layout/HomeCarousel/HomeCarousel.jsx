import React, { useEffect } from 'react';

import { Carousel } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
};

export default function HomeCarousel(props) {
    const { arrImg } = useSelector(state => state.CarouselReducer)
    console.log("arrImg: ", arrImg);
    const dispatch = useDispatch()
    useEffect(async () => {
        try {
            const result = await axios({
                url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
                method: 'GET',

            });
            // Đưa lên reducer
            console.log('result', result)

            dispatch({
                type: 'SET_CAROUSEL',
                arrImg: result.data.content,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    }, [])

    const rendenImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} alt={item.hinhAnh} className='w-full opacity-0' />

                </div>
            </div>
        })
    }


    return (
        <Carousel effect="fade">
            {rendenImg()}
        </Carousel>
    )
}
