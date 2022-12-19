import _ from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppleOutlined, FacebookOutlined } from '@ant-design/icons'


export default function Footer(props) {
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer)
    console.log("heThongRapChieu: ", heThongRapChieu);

    const arrHeThongRap =_.map(heThongRapChieu, (heThongRap) => _.pick(heThongRap, ['maHeThongRap','tenHeThongRap', 'logo']))
    console.log("arrHeThongRap: ", arrHeThongRap);


    return (
        <footer className="py-6 bg-coolGray-100 text-white bg-gray-800">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-3">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                        <img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" alt="cyberlearn.vn"/>

                        </a>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">ĐỐI TÁC</p>
                        <div className='grid grid-cols-3 gap-3' style={{alignItems:'center'}}>
                            {arrHeThongRap.map((heThongRap, index) => {
                                return <div key={index}>
                                    <img src={heThongRap.logo} style={{width: 50}}/>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
                        <p className="pb-1 text-lg font-medium">Mobile app</p>
                        <div className="flex text-white">
                            <div className="mr-5">
                            <AppleOutlined className="text-2xl" /> 
                            </div>
                            <div>
                            <FacebookOutlined className="text-2xl"/>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Thông tin</p>
                        {/* <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
                <div className="grid justify-center pt-6">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span className='text-center'>©2022 All rights reserved</span>
                        
                    </div>
                    
                </div>
            </div>
        </footer>

    )
}
