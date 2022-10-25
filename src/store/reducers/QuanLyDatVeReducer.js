import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../actions/type/QuanLyDatVeType"
import { ThongTinLichChieu } from '../../_core/models/ThongTinPhongVe'
const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: []
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }
        case DAT_VE: {
            // console.log(action)
            // Cập nhật danh sách ghế đang đặt
            let danhSachgheCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachgheCapNhat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDuocChon.maGhe)
            if (index !== -1) {
                // Nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xóa đi 
                danhSachgheCapNhat.splice(index, 1);
            } else {
                danhSachgheCapNhat.push(action.gheDuocChon)
            }


            return { ...state, danhSachGheDangDat: danhSachgheCapNhat }
        }

        default: return { ...state }
    }
}