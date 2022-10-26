import { CHUYEN_TAB, DAT_VE, DAT_VE_THANH_CONG, SET_CHI_TIET_PHONG_VE } from "../actions/type/QuanLyDatVeType"
import { ThongTinLichChieu } from '../../_core/models/ThongTinPhongVe'
const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [],
    // { maGhe: 56041 }, { maGhe: 56042 }
    tabActive: '1'
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

        case DAT_VE_THANH_CONG: {
            state.danhSachGheDangDat = []
            return { ...state }
        }

        case CHUYEN_TAB: {
            state.tabActive = '2'
            return { ...state }
        }

        case 'CHUYEN_TAB_ACTIVE': {
            state.tabActive = action.number
            return { ...state }
        }

        case 'DAT_GHE': {
            state.danhSachGheKhachDat = action.arrGheKhachDat;
            return { ...state }
        }

        default: return { ...state }
    }
}