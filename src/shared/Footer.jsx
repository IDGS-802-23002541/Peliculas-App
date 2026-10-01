import { Box, Typography } from '@mui/material'

function Footer({titulo}){
    const anioActual = new Date().getFullYear();

    return(
        <Box
            component="footer"
            sx={{
                mt: 5,
                py: 3,
                textAlign: "center"
            }}
        >

            <Typography
                variant="body2"
                color="text.secondary"
            >
                {`${titulo} - React + Vite`}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 9 }}>
                {anioActual}
            </Typography>

        </Box>
    )
}

export default Footer;