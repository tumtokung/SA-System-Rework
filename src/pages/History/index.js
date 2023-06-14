import { useProtectedPath } from '@/hooks';
import { Box, Slide, Typography } from '@mui/material';
import { HeaderPage } from '@/components';
function History() {
    useProtectedPath();
    return (
        <Box>
            <HeaderPage title="ประวัติ" />
        </Box>
    )
}

export default History