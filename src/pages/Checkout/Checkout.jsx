import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVeAction } from '../../store/actions/QuanLyDatVeAction'
import style from './Checkout.module.css'


export default function Checkout(props) {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer)
  console.log("chiTietPhongVe: ", { chiTietPhongVe });
  const dispatch = useDispatch()

  useEffect(() => {
    // gọi hàm tạo ra async function
    const action = layChiTietPhongVeAction(props.match.params.id)
    // dispatch action này đi
    dispatch(action)
  }, [])



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
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
          <hr />
          <h3 className="text-xl">Lật mật 48h</h3>
          <p>Địa điểm: 123123123</p>
          <p>Ngày chiếu: 242234</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400">Ghế</span>
            </div>
            <div className="text-right">
              <span className="text-green-400 text-lg">0đ</span>
            </div>
          </div>
          <hr />
          <div>
            <i>Email</i><br />
            {userLogin.email}
          </div>
          <div>
            <i>Phone</i><br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className='mb-0 h-full flex flex-col justify-end items-center'>
            <div className='bg-green-400 text-white w-full text-center py-3 font-bold text-2xl'>
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
