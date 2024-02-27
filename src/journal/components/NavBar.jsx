import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../store/auth";

export const NavBar = ({ drawerWidth = 320 }) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch( startLogout() );
    }
    const { displayName } = useSelector( state => state.auth );
  return (
    <AppBar 
        position="fixed"
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px` }
         }}
        >
        <Toolbar>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                
                <Typography variant="h6" noWrap component='div'>
                    { displayName }
                </Typography>
                
                <Typography variant="h6" noWrap component="div">Journal App</Typography>
                <IconButton 
                    color= "error"
                    onClick={ onLogout }
                >
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
