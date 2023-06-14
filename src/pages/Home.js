// import { useSession } from "next-auth/react"
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react';
import { useProtectedPath } from '@/hooks';
import { Box, Typography, Stack } from '@mui/material';
import { AccordionCourse, HeaderPage, SearchBar, SelectBar } from '@/components';
import { TabsItem } from '@/components';
import { useState } from 'react';
import Papa from "papaparse"
import { CourseList, AddCourse } from '@/containers/Home';

function HomeAuth() {
    // const { data: session } = useSession();
    // const router = useRouter()
    //hook
    const [tab, setTab] = useState(0);
    useProtectedPath();
    // Tab List
    const tabsHeader = ["รายวิชาทั้งหมด", "เพิ่มรายวิชา"];
    const tabsContent = [{ comp: (<CourseList />) },
    { comp: (<AddCourse />) },
    ];

    return (
        <Box>
            <HeaderPage title="หน้าหลัก" />
            <TabsItem tab={tab} setTab={setTab} tabsHeader={tabsHeader} />
            {tabsContent.map((content, index) => {
                return <Box key={index}> {index == tab && content.comp} </Box>
            })}
        </Box>
    )
}

export default HomeAuth;

