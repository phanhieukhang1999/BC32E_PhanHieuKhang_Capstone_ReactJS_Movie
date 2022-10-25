import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction } from '../../store/actions/QuanLyDatVeAction'
import style from './Checkout.module.css'
import './Checkout.css'
import { CloseOutlined, UserOutlined, CheckOutlined } from '@ant-design/icons'
import { DAT_VE } from '../../store/actions/type/QuanLyDatVeType'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'

export default function Checkout(props) {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
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
