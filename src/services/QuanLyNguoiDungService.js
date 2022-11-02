import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    }

    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    }

    layThongTinNguoiDung = (taiKhoan) => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, taiKhoan)
    }

    capNhatThongTinNguoiDung = (formData) => {
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formData)
    }

    // ADMIN USER
    layDanhSachNguoiDung = (taiKhoan = '') => {
        if (taiKhoan.trim() != '') {
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${taiKhoan}`)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)

    }

    layThongTinUser = (taiKhoan) => {
        return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${taiKhoan}`)
    }


    themNguoiDung = (thongTin) => {
        return this.post('/api/QuanLyNguoiDung/ThemNguoiDung', thongTin)
    }

    capNhatNguoiDung = (taiKhoan) => {
        return this.post('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung')
    }

}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();