import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction } from '../../store/actions/QuanLyDatVeAction'
import style from './Checkout.module.css'
import './Checkout.css'
import { CloseOutlined, UserOutlined, CheckOutlined } from '@ant-design/icons'
import { DAT_VE } from '../../store/actions/type/QuanLyDatVeType'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'

import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../store/actions/QuanLyNguoiDungAction'
import moment, { months } from 'moment'

function Checkout(props) {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
  console.log("danhSachGheDangDat: ", danhSachGheDangDat);
  console.log("chiTietPhongVe: ", { chiTietPhongVe });
  const dispatch = useDispatch()

  useEffect(() => {
    // gọi hàm tạo ra async function
    const action = layChiTietPhongVeAction(props.match.params.id)
    // dispatch action này đi
    dispatch(action)
  }, [])

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {

      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : ''

      let classGheDangDat = ''
      let indexGheDangDat = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      if (indexGheDangDat !== -1) {
        classGheDaDat = 'gheDangDat'
      }

      let classGheDaDuocDat = ''
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat'
      }


      return <Fragment key={index}>
        {<button onClick={() => {
          dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
          })
        }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} text-center`} key={index}>
          {ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined style={{ fontWeight: 'bold' }} /> : <CloseOutlined style={{ fontWeight: 'bold' }} /> : ghe.stt}
        </button>}


        {/* Lấy 16 ghế trên 1 hàng */}
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }



  return (
    <div className=" min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9 mt-3">
          <div className='flex flex-col items-center'>
            <div className='bg-black w-full' style={{ width: '80%', height: '15px' }}>

            </div>
            <div className={`${style['trapezoid']}`}>
              <h3 className='mt-3 text-black text-2xl text-center'>Màn hình</h3>
            </div>
            <div>
              {renderSeats()}
            </div>
          </div>
          <div className='mt-5 flex justify-center'>
            <table className='divide-y divide-gray-200 w-2/3 text-center'>
              <thead className='bg-gray-50 p-5'>
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td>
                    <button className='ghe text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button>
                  </td>
                  <td>
                    <button className='ghe gheDangDat text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button>
                  </td>
                  <td>
                    <button className='ghe gheVip text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button>
                  </td>
                  <td>
                    <button className='ghe gheDaDat text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button>
                  </td>
                  <td>
                    <button className='ghe gheDaDuocDat text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-2xl">
            {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
              return tongTien += ghe.giaVe
            }, 0).toLocaleString()} đ
          </h3>
          <hr />
          <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
          <p>Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
          <p>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-500 font-bold">Ghế:</span>
              {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                return <span key={index} className='text-green-500 text-xl'>  {gheDD.stt}</span>
              })}
            </div>
            <div className="text-right">
              <span className="text-green-400 text-lg">
                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                  return tongTien += ghe.giaVe
                }, 0).toLocaleString()} đ
              </span>
            </div>
          </div>
          <hr />
          <div className='my-5'>
            <i>Email</i><br />
            {userLogin.email}
          </div>
          <hr />
          <div className='my-5'>
            <i>Phone</i><br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className='mb-0 h-full flex flex-col items-center'>
            <div onClick={() => {
              const thongTinDatVe = new ThongTinDatVe()
              thongTinDatVe.maLichChieu = props.match.params.id
              thongTinDatVe.danhSachVe = danhSachGheDangDat
              console.log("thongTinDatVe: ", thongTinDatVe);

              dispatch(datVeAction(thongTinDatVe))


            }} className='bg-green-400 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer'>
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const { TabPane } = Tabs

// function callback(key) {
//   console.log(key)
// }

export default function CheckoutTab(props) {

  const {tabActive} = useSelector(state => state.QuanLyDatVeReducer)
  console.log("tabActive: ", tabActive);
  const dispatch = useDispatch()
  return <div className='p-5'>
    <Tabs defaultActiveKey='1' activeKey={tabActive} onChange={(key) => {
      dispatch({
        type: 'CHUYEN_TAB_ACTIVE',
        number: key.toString()
      })
    }}>
      <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
        <Checkout {...props} />
      </TabPane>
      <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
        <KetQuaDatVe {...props} />
      </TabPane>

    </Tabs>
  </div>
}


function KetQuaDatVe(props) {

  const dispatch = useDispatch()

  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log("thongTinNguoiDung: ", thongTinNguoiDung);
  // ko lofg ra dc thontin nguodung

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)


  useEffect(() => {
    const action = layThongTinNguoiDungAction()
    dispatch(action)
  }, [])

  const renderTicket = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe)
      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
          <div className="flex-grow">
            <h2 className="text-red-500 title-font font-medium text-2xl">{ticket.tenPhim}</h2>
            <p className="text-gray-500"><span className="font-bold">Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Ngày chiếu:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>
            <p><span className="font-bold">Địa điểm:</span> {seats.tenHeThongRap}   </p>
            <p>
              <span className="font-bold">Tên rạp:</span>  {seats.tenCumRap} - <span className="font-bold">Ghế:</span>  {ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl" key={index}> [ {ghe.tenGhe} ] </span> })}
            </p>
          </div>
        </div>
      </div>
    })
  }



  return <div className="p-5">
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-green-600 ">Lịch sử đặt vé khách hàng</h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !</p> */}
        </div>
        <div className="flex flex-wrap -m-2">
          {renderTicket()}

          {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://picsum.photos/200/200" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Lật mặt 48h</h2>
                <p className="text-gray-500">10:20 Rạp 5, Hệ thống rạp cinestar bhd </p>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>

  </div>
}