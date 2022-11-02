import React from 'react'

import { NavLink } from 'react-router-dom'
import { AudioOutlined, EditOutlined, SearchOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
// import Search from 'antd/lib/input/Search';
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';

import { history } from '../../../App';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { layDanhSachNguoiDungAction } from '../../../store/actions/QuanLyNguoiDungAction';
const { Search } = Input;

export default function User(props) {

  const { arrUserDefault } = useSelector(state => state.QuanLyNguoiDungReducer);

  console.log('arrUserDefault', arrUserDefault);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());

  }, [])
  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      render: (text, user, stt) => stt + 1
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
      sorter: (a, b) => {
        let tenTK1 = a.taiKhoan.toLowerCase().trim();
        let tenTK2 = b.taiKhoan.toLowerCase().trim();
        if (tenTK1 > tenTK2) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend'],
      width: '15%'
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'matKhau',
      render: (text, user, index) => {
        return <Fragment>
          {user.matKhau}
        </Fragment>
      },
      width: '15%'
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
      sorter: (a, b) => {
        let hoTen1 = a.hoTen.toLowerCase().trim();
        let hoTen2 = b.hoTen.toLowerCase().trim();
        if (hoTen1 > hoTen2) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend'],
      width: '15%'
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      render: (text, user) => {
        return <Fragment>
          {user.email}
        </Fragment>
      },
      width: '15%'
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDT',
      render: (text, user) => {
        return <Fragment>
          {user.soDT}
        </Fragment>
      },
      width: '15%'
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Hành động',
      dataIndex: 'taiKhoan',
      render: (text, user) => {
        return <Fragment>
          <NavLink key={1} className=" mr-2  text-2xl" to={`/admin/user/edit/${user.taiKhoan}`}><EditOutlined style={{ color: 'blue' }} /> </NavLink>
          <span style={{ cursor: 'pointer' }} key={2} className="text-2xl" onClick={() => {



          }}><DeleteOutlined style={{ color: 'red' }} /> </span>
 

        </Fragment>
      },
      sortDirections: ['descend', 'ascend'],
      width: '25%'
    },

  ];


  const data = arrUserDefault;




  const onSearch = value => {

    console.log(value);
    // gọi api layDanhSachNguoiDung
    dispatch(layDanhSachNguoiDungAction(value));

  };
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (

    <div>
      <h3 className="text-4xl">Quản lý Phim</h3>
      <Button className="mb-5" onClick={() => {
        history.push('/admin/user/adduser');
      }}>Thêm user</Button>
      <Search
        className="mb-5"
        placeholder="Nhập tên tài khoản cần tìm ..."
        enterButton={<SearchOutlined />}
        size="large"

        onSearch={onSearch}
      />

      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"taiKhoan"} />
    </div>
  )
}
