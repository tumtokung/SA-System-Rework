import {  Slide, Typography } from '@mui/material';

function HeaderPage({title = ""}) {
    return (
        <Slide direction="down" in={true}>
            <Typography variant='h4' color="text.primary" sx={{ mt: 2, mb: 4 }}>
                {title}
            </Typography>
        </Slide>
    )
}

export default HeaderPage