import { TOKEN, USER_LOGIN, USER_REGISTER } from "../../util/settings/config"
import { DANG_KY_ACTION, DANG_NHAP_ACTION, LAY_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG, SET_THONG_TIN_USER } from "../actions/type/QuanLyNguoiDungType"


let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

let register = {}
if (localStorage.getItem(USER_REGISTER)) {
    register = JSON.parse(localStorage.getItem(USER_REGISTER))
}

const stateDefault = {
    userLogin: user,

    userRegister: register,

    thongTinNguoiDung: {},

    arrUserDefault: [],

    //ADMIN
    thongTinUser: {}

}


export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)
            return { ...state, userLogin: thongTinDangNhap }
        }

        case DANG_KY_ACTION: {
            const { thongTinDangKy } = action
            localStorage.setItem(USER_REGISTER, JSON.stringify(thongTinDangKy))
            localStorage.setItem(TOKEN, thongTinDangKy.accessToken)
            return { ...state, register: thongTinDangKy }
        }

        case SET_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung
            return { ...state }
        }

        // ADMIN
        case LAY_DANH_SACH_NGUOI_DUNG: {
            state.arrUserDefault = action.arrUserDefault
            return { ...state }
        }

        case SET_THONG_TIN_USER: {
            state.thongTinUser = action.thongTinUser
            return { ...state }
        }

        default: return { ...state }
    }
}