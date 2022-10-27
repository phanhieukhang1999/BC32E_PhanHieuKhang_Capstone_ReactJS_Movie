import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./type/QuanLyNguoiDungType"
import { history } from '../../App'
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
            if (result.status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content,

                })
                // chuyển hướng đăng nhập về trang trước đó
                history.goBack()

                console.log("result: ", result);
            }
        } catch (error) {
            console.log("error: ", error);

        }
    }
}



export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung()
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
