import React, { useState } from 'react'

import { Radio, Space, Tabs } from 'antd';

export default function HomeMenu(props) {
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };
    return (
        <>
            
            <Tabs
                tabPosition={tabPosition}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: <img src="https://picsum.photos/200" width="50" className="rounded-full" />,
                        key: id,
                        children: `Content of Tab ${id}`,
                    };
                })}
            />
        </>
    )
}
