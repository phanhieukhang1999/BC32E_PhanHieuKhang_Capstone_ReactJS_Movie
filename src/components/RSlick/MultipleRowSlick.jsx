import React, { Component } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styleSlick from './MultipleRowSlick.module.css';
import Film from '../Film/Film'


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


export default class MultipleRowSlick extends Component {


    renderFilms = () => {

        return this.props.arrFilm.map((item, index) => {
            return <div className={`${styleSlick['width-item']}`} key={index}  >
                <Film />
            </div>
        })
    }

    render() {
        const settings = {
            className: "center variable-width",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            rows: 1,
            slidesPerRow: 2,
            variableWidth: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div>
                <h2>Multiple Rows</h2>
                <Slider {...settings}>
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}
                    {this.renderFilms()}


                </Slider>
            </div>
        );
    }
}