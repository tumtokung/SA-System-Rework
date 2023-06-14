import React from 'react';
import { AccordionCourse, SearchBar, SelectBar } from '@/components';
import { Box, Stack } from '@mui/material';

function CourseList() {
    var myArray = Array(20).fill(0);
    return (
        <Box sx={{ width: "100%", borderRadius: 4, p: 2 }} >
            <Stack flexDirection="row" >
                <SearchBar />
                <Stack sx={{ ml: 2 }} flexDirection="row">
                    {/* <SelectBar />
                    <SelectBar /> */}
                </Stack>
            </Stack>

            <Box sx={{ overflow: "scroll", maxHeight: "62vh", mt: 2 }}>
                {
                    myArray.map((value, index) => {
                        return <AccordionCourse key={index} />
                    })
                }
            </Box>
        </Box>
    )
}

export default CourseList