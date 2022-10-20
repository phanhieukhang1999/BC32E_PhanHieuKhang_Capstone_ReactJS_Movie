
const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1325,
            "tenPhim": "Teddy 2",
            "biDanh": "teddy-2",
            "trailer": "https://www.youtube.com/embed/S3AVcCggRnU",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/teddy-2_gp12.jpg",
            "moTa": "1 bộ phim hay nha",
            "maNhom": "GP12",
            "ngayKhoiChieu": "2021-07-04T10:08:13.493",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        },
        {
            "maPhim": 1325,
            "tenPhim": "Teddy 2",
            "biDanh": "teddy-2",
            "trailer": "https://www.youtube.com/embed/S3AVcCggRnU",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/teddy-2_gp12.jpg",
            "moTa": "1 bộ phim hay nha",
            "maNhom": "GP12",
            "ngayKhoiChieu": "2021-07-04T10:08:13.493",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        },
    ]
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.payload) {

        default: return { ...state }
    }
}