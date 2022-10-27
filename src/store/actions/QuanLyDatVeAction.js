import { connection } from "../../index";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { CHUYEN_TAB, DAT_VE, DAT_VE_THANH_CONG, SET_CHI_TIET_PHONG_VE } from "./type/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)

            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }
            console.log("result: ", result);


        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}


export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch, getState) => {

        try {
            dispatch(displayLoadingAction)

            const result = await quanLyDatVeService.datVe(thongTinDatVe)
            console.log("result: ", result.data.content);

            // Đặt vé thành công goi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))

            await dispatch({ type: DAT_VE_THANH_CONG })

            await dispatch(hideLoadingAction)

            let userLogin = getState().QuanLyNguoiDungReducer.userLogin
            connection.invoke('datGheThanhCong', userLogin.taiKhoan, thongTinDatVe.maLichChieu)

            dispatch({ type: CHUYEN_TAB })

        } catch (error) {
            dispatch({
                type: 'HIDE_LOADING'
            })
            console.log("error: ", error.response.data);

        }
    }
}


export const datGheAction = (ghe, maLichChieu) => {

    // redux thunk trả về 2 tham số dispatch, getState
    return async (dispatch, getState) => {

        // đưa thông tin ghế lên reducer
        await dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
        })

        // call api về backend
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan
        console.log('danhSachGheDangDat', danhSachGheDangDat)
        console.log('taiKhoan', taiKhoan)
        console.log('maLichChieu', maLichChieu)

        //Biến mảng thành chuỗi
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat)

        // call api signalr
        connection.invoke('datGhe', taiKhoan, danhSachGheDangDat, maLichChieu)
    }
}