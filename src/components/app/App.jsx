import { Box } from "@mui/material"
import { Outlet, useLocation } from "react-router"
import  { Navbar } from "../"

const App = () =>{

    return (
        <Box sx={{ minHeight:"90vh"}}>
            <Navbar />
            <Box sx={{ pt:"72px"}} >
                <Outlet />
            </Box>
            
        </Box>
    )
}
 

export default App