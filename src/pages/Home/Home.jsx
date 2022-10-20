import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'

// Kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../components/Film/Film'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)

    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />

    //     })
    // }
    return (
        <div className='container'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <MultipleRowSlick arrFilm={arrFilm} />
                    {/* <div className="flex flex-wrap -m-4">
                        {renderFilms()}
                    </div> */}
                </div>
            </section>




            <HomeMenu />
        </div>
    )
}
