
import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_CAROUSEL } from "./type/CarouselType";

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner()
            // axios({
            //     url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
            //     method: 'GET',
            //     headers: {
            //         TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'
            //     },

            // });
            console.log('result', result)
            // đưa lên reducer
            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}