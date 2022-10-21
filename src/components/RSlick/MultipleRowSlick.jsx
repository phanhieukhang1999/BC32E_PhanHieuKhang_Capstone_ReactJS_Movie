import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css';
import Film from '../Film/Film'
import Film_Flip from "../Film/Film_Flip";
import { useDispatch } from "react-redux";
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

    const renderFilms = () => {
        // slice giới hạn render ra 12 film
        return props.arrFilm.map((item, index) => {
            return <div className="mt-2" key={index}>
                <Film_Flip item={item} />
            </div>
        })
    }


    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <button type="button" class="mr-5 px-8 py-3 font-semibold bg-red-800 rounded text-white" onClick={() => {
                const action = {type: SET_FILM_DANG_CHIEU}
                dispatch(action)
            }}>PHIM ĐANG CHIẾU</button>
            <button type="button" class="px-8 py-3 font-semibold bg-white border-red-700  border rounded text-red-800">PHIM SẮP CHIẾU</button>

            <Slider {...settings}>
                {renderFilms()}
                


            </Slider>
        </div>
    );

}

export default MultipleRowSlick