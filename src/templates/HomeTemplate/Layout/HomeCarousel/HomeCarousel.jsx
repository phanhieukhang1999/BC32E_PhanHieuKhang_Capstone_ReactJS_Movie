import React, { useEffect } from 'react';

import { Carousel } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

// import axios from 'axios';
import { getCarouselAction } from '../../../../store/actions/CarouselAction';
import './HomeCarousel.scss'
const contentStyle = {
    // height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    
};

export default function HomeCarousel(props) {
    const { arrImg } = useSelector(state => state.CarouselReducer)
    // console.log("arrImg: ", arrImg);

    const dispatch = useDispatch()
    // sẽ tự kích hoạt khi component load ra
    useEffect(() => {

        // 1 action = {type: '', data}
        // 2 (phải cài middleware) callBackFunction (dispatch)
        dispatch(getCarouselAction());

    }, [])


    const rendenImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div className='home-carousel' style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img style={{height: 500}} src={item.hinhAnh} alt={item.hinhAnh} className='w-full opacity-0' />

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
