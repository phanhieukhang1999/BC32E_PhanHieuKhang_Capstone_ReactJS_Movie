import { useFormik } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../../App';
import { capNhatNguoiDungAction, layDanhSachNguoiDungAction, layThongTinNguoiDungAction, layThongTinUserAction } from '../../../../store/actions/QuanLyNguoiDungAction';
import { useParams } from "react-router-dom";
import { GROUPID } from '../../../../util/settings/config';
export default function EditUser(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { thongTinUser } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log("thongTinUser: ", thongTinUser);

  useEffect(() => {
    dispatch(layThongTinUserAction(id))
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinUser?.taiKhoan || '',
      matKhau: thongTinUser?.matKhau || '',
      email: thongTinUser?.email || '',
      soDT: thongTinUser?.soDT || '',
      maNhom: GROUPID,
      maLoaiNguoiDung: thongTinUser?.maLoaiNguoiDung || '',
      hoTen: thongTinUser?.hoTen || '',
    },
    onSubmit: values => {

      console.log("values: ", values);
      dispatch(capNhatNguoiDungAction(values))
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <div noValidate action className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">

          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="taiKhoan" className="text-sm">Tài khoản</label>
              <input value={formik.values.taiKhoan} onChange={formik.handleChange} name='taiKhoan' placeholder="Tài khoản" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">Email</label>
              <input value={formik.values.email} onChange={formik.handleChange} name='email' placeholder="Email" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="matKhau" className="text-sm">Mật khẩu</label>
              <input value={formik.values.matKhau} onChange={formik.handleChange} name='matKhau' placeholder="Mật khẩu" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="soDT" className="text-sm">Số điện thoại</label>
              <input value={formik.values.soDT} onChange={formik.handleChange} name='soDT' placeholder="Số điện thoại" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="hoTen" className="text-sm">Họ tên</label>
              <input value={formik.values.hoTen} onChange={formik.handleChange} name='hoTen' placeholder="Họ tên" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="maLoaiNguoiDung" className="text-sm">Loại người dùng</label>
              <select value={formik.values.maLoaiNguoiDung} onChange={formik.handleChange} name='maLoaiNguoiDung' className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" >
                <option value='KhachHang'>KhachHang</option>
                <option value='QuanTri'>QuanTri</option>
              </select>
            </div>
          </div>
        </fieldset>
        <div className='flex justify-between' style={{ marginTop: 0 }}>
          <div className='p-6' >
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => {
              history.push('/admin/user')

            }}>Trở về</button>
          </div>
          <div className='p-6' >
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" >Thêm</button>
            <button type="submit" className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Lưu</button>
          </div>
        </div>

      </div>
    </form>

  )
}

