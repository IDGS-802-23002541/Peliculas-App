import { AppBar, Toolbar, Typography } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';

function Header ({titulo}){
    return (
        <AppBar position='static' sx={{mb:3}}>
            <Toolbar>
                <MovieIcon sx={{mr:1, color: "#fffff"}}/>
                <Typography variant="h3" sx={{flexGrow:1, color: "#ffffff"}}>
                    {`${titulo} `}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;