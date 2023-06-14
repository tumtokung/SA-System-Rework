import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, Stack, Typography } from '@mui/material';

// const courseDefault = {
//     courseID : ""
// }
function AccordionCourse({course = {}, term = ""}) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Stack flexDirection="row" justifyContent="space-between" sx={{ width: "100%", mr: 4 }}>
                    <Typography variant='subtitle1'> {course.courseID} </Typography>
                    <Typography variant='subtitle1'> {course.title} </Typography>
                    <Typography variant='subtitle1'> RASE </Typography>
                    <Typography variant='subtitle1'> 2565 | {term} </Typography>
                    <Typography variant='body2' color="text.white" sx={{ bgcolor: "success.main", px: 2, borderRadius: 2 }}> ขอนิสิตได้ </Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Divider sx={{ mb: 2 }} />
                <Stack flexDirection="row" justifyContent="space-between" sx={{ width: "100%", mr: 4 }}>
                    <Typography variant='subtitle1'> 3 หน่วยกิต </Typography>
                    <Typography variant='subtitle1'> หมู่บรรยาย</Typography>
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCourse