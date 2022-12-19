import { ErrorMessage, useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangKyAction, dangNhapAction } from '../../store/actions/QuanLyNguoiDungAction';
import * as Yup from "yup";
export default function Register(props) {

  const dispatch = useDispatch()

  const { userRegister } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log("userRegister: ", userRegister);

  const formik = useFormik({

    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      confirm_matKhau: '',
      soDt: '',
      maNhom: '',
      hoTen: '',
    },
    validationSchema: Yup.object({

      taiKhoan: Yup.string()
        // .matches(/^[aA-zZ\s]+$/, 'phải là ký tự !')
        .min(5, "từ 5 ký tự đến 15 ký tự !")
        .max(15, "tối đa 15 ký tự !")
        .required("không được bỏ trống!"),
      email: Yup.string()
        .email("không đúng định dạng!")
        .required("không được bỏ trống!"),
      matKhau: Yup.string()
        // .matches(/^[0-9]+$/, 'là số từ 0 đến 9!')
        // .min(8, "tối thiểu 8 ký tự")
        .required("không được bỏ trống!"),
      confirm_matKhau: Yup.string()
        .oneOf([Yup.ref("matKhau")], "nhập lại không đúng!")
        .required("không được bỏ trống!"),
      soDt: Yup.string()
        .min(10, "bắt buộc phải là số và là 10 số !")
        .required("không được bỏ trống!"),
      hoTen: Yup.string()
        .matches(/^[aA-zZ\s]+$/, 'phải là ký tự !')
        .min(10, "từ 2 ký tự đến 50 ký tự !")
        .max(50, "tối đa 50 ký tự !")
        .required("không được bỏ trống!"),
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      const action = dangKyAction(values)
      dispatch(action)
      console.log("values: ", values);

    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="py-6 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
              <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                " }} />
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                </g>
              </g>
            </svg>
          </div>
          <NavLink to="/" className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">CyberSoft Movie</NavLink>
        </div>
      </div>
      <div className="px-12 sm:px-24 md:px-48 lg:px-6 lg:mt-5 xl:px-24 xl:max-w-2xl">
        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Đăng ký</h2>
        <div className="mt-6">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Tài Khoản</div>
              <input name='taiKhoan' value={formik.values.taiKhoan} onBlur={formik.handleBlur} onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào tài khoản" />
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <p className='text-red-600 text-sm'>Tài khoản {formik.errors.taiKhoan}</p>
              )}

            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide"> Mật khẩu</div>

              <input type="password" name='matKhau' value={formik.values.matKhau} onBlur={formik.handleBlur} onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào mật khẩu" />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className='text-red-600 text-sm'>Mật khẩu {formik.errors.matKhau}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide"> Nhập lại khẩu</div>

              <input type="password" name='confirm_matKhau' value={formik.values.confirm_matKhau} onBlur={formik.handleBlur} onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập lại mật khẩu" />
              {formik.errors.confirm_matKhau && formik.touched.confirm_matKhau && (
                <p className='text-red-600 text-sm'>Mật khẩu {formik.errors.confirm_matKhau}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide"> Họ tên</div>

              <input name='hoTen' value={formik.values.hoTen} onBlur={formik.handleBlur} onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào họ tên" />
              {formik.errors.hoTen && formik.touched.hoTen && (
                <p className='text-red-600 text-sm'>Họ tên {formik.errors.hoTen}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide"> Email</div>

              <input name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào email" />
              {formik.errors.email && formik.touched.email && (
                <p className='text-red-600 text-sm'>Email {formik.errors.email}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide"> Số điện thoại</div>

              <input name='soDt' value={formik.values.soDt} onBlur={formik.handleBlur} onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào số điện thoại" />
              {formik.errors.soDt && formik.touched.soDt && (
                <p className='text-red-600 text-sm'>Số điện thoại {formik.errors.soDt}</p>
              )}
            </div>


            <div className="mt-10">
              <button className="bg-indigo-500 text-gray-100 text-xl p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg">
                Đăng ký
              </button>
            </div>
          </div>
          <div className="my-5 text-xl font-display font-semibold text-gray-700 text-center">
            Bạn đã có tài khoản ? <NavLink to="/login" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng nhập</NavLink>
          </div>
        </div>
      </div>
    </form>
  )
}
