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

    // admin
    layDanhSachNguoiDung = () => {
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)

    }

}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();