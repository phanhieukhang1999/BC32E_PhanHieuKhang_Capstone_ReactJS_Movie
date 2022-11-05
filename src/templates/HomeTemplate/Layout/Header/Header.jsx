import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { Select } from 'antd';
import './header.scss'
import { MenuOutlined } from '@ant-design/icons'
// Hook đa ngôn ngữ
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';


const { Option } = Select;


export default function Header() {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    // Đa ngôn ngữ
    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value)

    };

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button className="self-center px-8 py-3 rounded" onClick={() => {
                    history.push('/login')
                }}>{t('signin')}</button>
                <button className="self-center px-8 py-3 font-semibold rounded  dark:text-gray-900" onClick={() => {
                    history.push('/register')
                }}>{t('register')}</button>

            </Fragment>
        }
        return <Fragment> <button className="self-center px-8 py-3 rounded" onClick={() => {
            history.push(`/profile/${userLogin.taiKhoan}`)
        }}>Hello ! {userLogin.taiKhoan}</button>

            <button  className='text-white mr-5' onClick={() => {
                localStorage.removeItem(USER_LOGIN)
                localStorage.removeItem(TOKEN)
                history.push('/home')
                window.location.reload()
            }}>{t('logout')}</button>
        </Fragment>
    }

    return (
        <header className="p-4  dark:text-gray-100 bg-opacity-40 bg-black text-white fixed w-full z-10">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" alt="..." />

                </NavLink>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className='checkbtn'>
                    <MenuOutlined />
                </label>
                {/* <label for="check" className='btn-bars'>
                    <button className=" p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                        </svg>
                    </button>
                </label> */}

                <ul className="items-stretch space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName='border-b-white'>Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName='border-b-white'>Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white" activeClassName='border-b-white'>News</NavLink>

                    </li>
                    {renderLogin()}
                    {/* <Select defaultValue="en" style={{ width: 100, }} onChange={handleChange}>
                        <Option value="en">Eng</Option>
                        <Option value="chi">Chi</Option>

                        <Option value="vi">Vi</Option>
                    </Select> */}
                </ul>
                <div className="leaguage items-center flex-shrink-0 lg:flex">
                    {/* {renderLogin()} */}

                    {/* <div className=''>
                    </div> */}


                    <Select defaultValue="en" style={{ width: 100, }} onChange={handleChange}>
                        <Option value="en">Eng</Option>
                        <Option value="chi">Chi</Option>

                        <Option value="vi">Vi</Option>
                    </Select>
                </div>

            </div>
        </header>

    )
}
