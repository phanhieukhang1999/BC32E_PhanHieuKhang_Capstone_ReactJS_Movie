
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }

}


export const quanLyDatVeService = new QuanLyDatVeService();