import { baseService } from "./baseService";

export class quanLyPhimService extends baseService {
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }
}

export const quanLyPhim = new quanLyPhimService();