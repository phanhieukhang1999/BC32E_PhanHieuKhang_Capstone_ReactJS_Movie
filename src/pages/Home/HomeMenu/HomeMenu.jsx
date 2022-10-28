

import React, { Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const { TabPane } = Tabs;

export default class Demo extends React.PureComponent {

    state = {
        tabPosition: 'left',
    };

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };
    componentDidMount() {

    }

    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = this.state;
            return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap?.slice(0, 6).map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '300px', display: 'flex', alignItems: 'center' }}>
                                <img src={heThongRap.logo} width="50" />
                                <div className='ml-2 text-left'>
                                    {cumRap.tenCumRap}
                                    <p className='text-red-300 mb-0'>Chi tiết</p>
                                </div>
                            </div>
                        } key={index}>
                            {/* Load phim tương ứng cụm rạp */}
                            {/* slice lấy tối đa 5 phim */}
                            {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className='my-5' >
                                        <div style={{ display: 'flex' }}>
                                            {/* onError trả về 1 hình ảnh bất kỳ khi ảnh trên API bị lỗi */}
                                            <img style={{ width: 80, height: 100 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />
                                            <div className='ml-3'>
                                                <h1 className='text-bold text-red-800 text-2xl'>{phim.tenPhim}</h1>
                                                <p className='text-xl'>{cumRap.diaChi}</p>
                                                <div className='grid grid-cols-6 gap-6'>
                                                    {/* slice lấy tối đa 12 lịch chiếu */}
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-2xl text-red-400" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>

            </TabPane>
        })
    }

    render() {

        const { tabPosition } = this.state;
        return (
            <>

                <Tabs tabPosition={tabPosition}>
                    {this.renderHeThongRap()}
                </Tabs>
            </>
        );
    }
}

