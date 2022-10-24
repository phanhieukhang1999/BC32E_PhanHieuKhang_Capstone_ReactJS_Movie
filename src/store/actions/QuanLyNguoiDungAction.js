import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { TOKEN } from "../../util/settings/config"
import { DANG_NHAP_ACTION } from "./type/QuanLyNguoiDungType"
import {history} from '../../App'
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
            if (result.status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content,

                })

                history.goBack()

                console.log("result: ", result);
            }
        } catch (error) {
            console.log("error: ", error.respone.data);

        }
    }
}