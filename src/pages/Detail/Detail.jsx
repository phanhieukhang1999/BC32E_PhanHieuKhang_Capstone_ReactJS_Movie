import React, { useEffect } from 'react'
import './Detail.scss'
import '../../assets/styles/circle.scss'

import { Tabs, Radio, Space, Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CHI_TIET_PHIM } from '../../store/actions/type/QuanLyRapType';
import { layThongTinChiTietPhim } from '../../store/actions/QuanLyRapAction';
import moment from 'moment';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


const { TabPane } = Tabs;


export default function Detail(props) {
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail)
    console.log({ filmDetail })
    const dispatch = useDispatch()

    useEffect(() => {
        // Lấy thông tin param từ url
        let { id } = props.match.params
        // console.log("id: ", id);
        dispatch(layThongTinChiTietPhim(id))
    }, [])

    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
            <div className='Detail'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-5 col-start-3'>
                        <div className='grid grid-cols-3'>
                            <img className='col-span-1' src={filmDetail.hinhAnh} style={{ width: 250, height: 300 }} alt="123" />
                            <div className='col-span-2 ml-5' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p className='text-2xl'>Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                <p className='text-4xl'>{filmDetail.tenPhim}</p>
                                <p>Mô tả: {filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4' >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <h1 style={{ color: '#39a329', fontWeight: 'bold', fontSize: '22px' }}>Đánh giá</h1>
                            <h1 className='text-2xl' >

                                <Rate allowHalf value={filmDetail.danhGia / 2} style={{ fontSize: 35 }} />
                            </h1>
                            <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                                <span style={{ color: '#fadb14', fontWeight: 'bold' }}>{filmDetail.danhGia * 10}%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-5 container w-2/3 bg-white mx-auto py-5'>
                    <Tabs defaultActiveKey='1' centered>
                        <TabPane tab='Lịch chiếu' key='1' style={{ minHeight: 300 }}>
                            <div className='lich-chieu'>
                                <Tabs tabPosition={'top'}>
                                    {filmDetail.heThongRapChieu?.map((heThongRap, index) => {
                                        return <TabPane tab={<div>
                                            <img src={heThongRap.logo} alt={heThongRap.logo} className="rounded-full" width={50} height={50} />
                                            {heThongRap.tenHeThongRap}
                                        </div>} key={index}>

                                            {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                                return <div className='mt-5' key={index}>
                                                    <div className='flex flex-row'>
                                                        <img src={cumRap.hinhAnh} alt={cumRap.hinhAnh} style={{ width: 60, height: 60 }} />
                                                        <div className='ml-2'>
                                                            <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }}>{cumRap.tenCumRap}</p>
                                                            <p className='text-gray-600'>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className='thong-tin-lich-chieu grid grid-cols-4'>
                                                        {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className='col-span-1 text-red-600 font-bold'>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('DD-MM-YYYY - hh:mm A')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            })}

                                        </TabPane>
                                    })}

                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab='Thông tin' key='2' style={{ minHeight: 300 }}>
                            Thông tin
                        </TabPane>
                        <TabPane tab='Đánh giá' key='3' style={{ minHeight: 300 }}>
                            Đánh giá
                        </TabPane>
                    </Tabs>
                </div>



            </div>

        </div>
    )
}
