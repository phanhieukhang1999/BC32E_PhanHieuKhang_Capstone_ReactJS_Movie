import React, { useState } from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'

import './Film_Flip.css'
import { NavLink } from 'react-router-dom'

import { history } from '../../App'

export default function Film_Flip(props) {

    const { item } = props

    return (
        <div className="flip-card mt-2">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                </div>
                <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0 }} >
                        <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />

                    </div>
                    <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <div className="rounded-full cursor-pointer" >

                                <PlayCircleOutlined style={{ fontSize: '50px' }} >

                                </PlayCircleOutlined></div>
                            <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Bắt sự kiện onClick, dùng thư viện history chuyển hướng trang, không tối ưu về mặt SEO */}
            <div onClick={() => {
                history.push(`/detail/${item.maPhim}`)
            }} className="text-center cursor-pointer py-2 bg-red-700 my-2 text-white font-bold">ĐẶT VÉ</div>
        </div>

    )



}
