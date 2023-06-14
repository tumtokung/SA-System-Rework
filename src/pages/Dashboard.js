import React, { useState } from 'react'
import { HeaderPage } from '@/components'
import { Box, Typography } from '@mui/material'
import { TabsItem } from '@/components'

function Dashboard() {
    const [tab, setTab] = useState();
    const tabsHeader = ["หน้าแรก", "หน้าสอง", "หน้าสาม", "หน้าสี่"]
    return (
        <Box>
            <HeaderPage title='แดชบอร์ด' />
            <TabsItem tab={tab} setTab={setTab} tabsHeader={tabsHeader}/>
            {tab == 0 &&
                <Typography>
                    1
                </Typography>
            }
        </Box>
    )
}

export default Dashboard