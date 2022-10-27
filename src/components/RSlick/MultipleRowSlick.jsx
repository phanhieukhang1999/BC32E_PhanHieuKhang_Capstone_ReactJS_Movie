import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css';
import Film from '../Film/Film'
import Film_Flip from "../Film/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../store/actions/type/QuanLyPhimType";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </div>

    );
}


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}

            style={{ ...style, display: "block", left: '-50px' }}
            onClick={onClick}
        >
        </div>
    );
}


const MultipleRowSlick = (props) => {
    const dispatch = useDispatch()

    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer)
    console.log("dangChieu: ", dangChieu);


    const renderFilms = () => {
        // slice giới hạn render ra tối đa 12 film
        return props.arrFilm.map((item, index) => {
            return <div className="mt-2" key={index}>
                <Film_Flip item={item} />
            </div>
        })
    }
    // button Đang chiếu và Sắp chiếu
    let activeClassDangChieu = dangChieu === true ? 'active_Film' : 'none_active_Film'

    let activeClassSapChieu = sapChieu === true ? 'active_Film' : 'none_active_Film'


    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <button type="button" class={`${styleSlick[activeClassDangChieu]} mr-5 px-8 py-3 font-semibold bg-red-800 rounded border border-red-700 text-white`} onClick={() => {
                const action = { type: SET_FILM_DANG_CHIEU }
                dispatch(action)
            }}>PHIM ĐANG CHIẾU</button>
            <button type="button" class={`${styleSlick[activeClassSapChieu]} px-8 py-3 font-semibold bg-white border-red-700  border rounded text-red-800`} onClick={() => {
                const action = { type: SET_FILM_SAP_CHIEU }
                dispatch(action)
            }}>PHIM SẮP CHIẾU</button>

            <Slider {...settings}>
                {renderFilms()}



            </Slider>
        </div>
    );

}

export default MultipleRowSlick