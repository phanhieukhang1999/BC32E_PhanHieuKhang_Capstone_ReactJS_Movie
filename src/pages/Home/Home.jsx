import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import '../Home/Home.scss'
// Kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'
import { layDanhSachPhimAction } from '../../store/actions/QuanLyPhimAction'
import { layDanhSachHeThongRapAction } from '../../store/actions/QuanLyRapAction'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch()
    console.log('HomeProps', arrFilm)


    useEffect(() => {
        const action = layDanhSachPhimAction()
        dispatch(action)
        dispatch(layDanhSachHeThongRapAction())

    }, [])

    return (
        <div>
            <HomeCarousel />
            <section className="text-gray-600 body-font">
                <div className="section-body container px-5 py-24 mx-auto">
                    <MultipleRowSlick arrFilm={arrFilm} />
                    {/* <div className="flex flex-wrap -m-4">
                        {renderFilms()}
                    </div> */}
                </div>
            </section>



            <div className='container'>
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>
        </div>
    )
}
