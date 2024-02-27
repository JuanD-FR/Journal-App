import { Box, Grid, List, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { SideBarItem } from "../components";
import { useSelector } from "react-redux";

const drawerWidth = 1;

export const JournalLayout = ({ children }) => {
  const { notes } = useSelector( state => state.journal );
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
          <NavBar drawerWidth= { drawerWidth } />
          {/*<SideBar drawerWidth= { drawerWidth } />*/}
          <Box 
              component="main"
              sx={{ flexGrow: 1, p: 3 }}
          >
              <Toolbar/>
              { children }
          </Box>   
        </Box>
      </Grid>
      <Box
          component="nav"
          sx={{ 
              width: { sm: drawerWidth }, 
              flexShrink: { sm: 0},
          }}    
        >
          <List>
          {
            notes.map( note => (
              <SideBarItem key={ note.id } { ...note } />
            ))
          }
          </List>
        </Box>

    </Grid>
    
    
    
    
  )
}



