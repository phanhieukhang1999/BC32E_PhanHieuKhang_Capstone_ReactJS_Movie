import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { CAP_NHAT_NGUOI_DUNG, DANG_KY_ACTION, DANG_NHAP_ACTION, LAY_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG } from "./type/QuanLyNguoiDungType"
import { history } from '../../App'
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
            console.log("result: ", result);
            if (result.status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content,

                })
                // chuyển hướng đăng nhập về trang trước đó
                // history.push(`detail/${thongTinDangNhap.lichChieu.maLichChieu}`)

                history.push('/home')

            }
        } catch (error) {
            console.log("error: ", error);

        }
    }
}

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy)
            alert('Đăng ký tài khoản thành công !')
            console.log("result: ", result);
            if (result.status === 200) {
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinDangKy: result.data.content,

                })
                // history chuyển hướng dăng ký thành công về trang login
                // history.goBack()

                history.push('/login')

            }
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}



export const layThongTinNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung(taiKhoan)

            console.log("result: ", result);

            if (result.status === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content,

                })
            }
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}

export const capNhatThongTinNguoiDungAction = (formData) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(formData)
            alert('Cập nhật tài khoản thành công !')
            console.log("result: ", result);

            if (result.status === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content,

                })
            }
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}

// ADMIN
export const layDanhSachNguoiDungAction = () => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung()
            console.log("result: ", result);

            if (result.status === 200) {
                dispatch({
                    type: LAY_DANH_SACH_NGUOI_DUNG,
                    arrUserDefault: result.data.content,

                })
            }
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}
