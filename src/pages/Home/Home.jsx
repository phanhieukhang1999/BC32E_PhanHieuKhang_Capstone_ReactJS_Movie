import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'

// Kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'
import { layDanhSachPhimAction } from '../../store/actions/QuanLyPhimAction'

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch()
    console.log('HomeProps', arrFilm)


   useEffect(() => {
    const action = layDanhSachPhimAction()
    dispatch(action)

   },[])

    return (
        <div>
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
