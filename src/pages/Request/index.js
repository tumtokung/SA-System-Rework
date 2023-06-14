import { useProtectedPath } from '@/hooks';
import { Box, Slide, Typography } from '@mui/material';
import { HeaderPage } from '@/components';

function Request() {
  useProtectedPath();
  return (
    <Box>
      <HeaderPage title='คำร้อง' />
    </Box>
  )
}

export default Request