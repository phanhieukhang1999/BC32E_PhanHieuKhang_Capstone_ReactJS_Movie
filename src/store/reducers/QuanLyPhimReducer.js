import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../actions/type/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/type/QuanLyRapType"

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 5859,
            "tenPhim": "Chị Mười Ba: 3 Ngày Sinh Tử",
            "biDanh": "chi-muoi-ba-3-ngay-sinh-tu",
            "trailer": "https://youtu.be/i1GL2I_XQQw",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/chi-muoi-ba-3-ngay-sinh-tu_gp00.jpg",
            "moTa": "Phần hai Chị Mười Ba: 3 Ngày Sinh Tử được đầu tư hoành tráng hơn với những màn rượt đuổi ngẹt thở, những pha đánh đấm chân thật hơn, hứa hẹn “bùng cháy” mạnh mẽ và kịch tính vào tháng 12 này",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2021-03-09T00:00:00",
            "danhGia": 5,
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
        },
        {
            "maPhim": 5859,
            "tenPhim": "Chị Mười Ba: 3 Ngày Sinh Tử",
            "biDanh": "chi-muoi-ba-3-ngay-sinh-tu",
            "trailer": "https://youtu.be/i1GL2I_XQQw",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/chi-muoi-ba-3-ngay-sinh-tu_gp00.jpg",
            "moTa": "Phần hai Chị Mười Ba: 3 Ngày Sinh Tử được đầu tư hoành tráng hơn với những màn rượt đuổi ngẹt thở, những pha đánh đấm chân thật hơn, hứa hẹn “bùng cháy” mạnh mẽ và kịch tính vào tháng 12 này",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2021-03-09T00:00:00",
            "danhGia": 5,
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
        },
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    filmDetail: {

    },
     thongTinPhim: {}

}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = state.arrFilm
            return { ...state }
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu
            state.arrFilm = state.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu)
            return { ...state }

        }
        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu
            state.arrFilm = state.arrFilmDefault.filter((film) => film.sapChieu === state.sapChieu)
            return { ...state }

        }

        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail
            return {...state}
        }

        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim
            return {...state}
        }
        default: return { ...state }
    }
}