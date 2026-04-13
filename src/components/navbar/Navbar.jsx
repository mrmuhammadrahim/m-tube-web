import { Stack,Box } from "@mui/material"
import { logo } from "../../constants"
import { colors } from "../../constants/colors"
import { Link } from "react-router"
import { SearchBar } from "../search-bar/search-bar"

const Navbar = () => {

    return <Stack 
        direction={"row"} 
        alignItems={"center"} 
        justifyContent={"space-between"} 
        p={2}
        sx={{position:"sticky", top: 0, zIndex: 999, background: colors.primery }}
    >
        <Link to={"/"}>
            <img src={logo} alt="logo" />
        </Link>
        <SearchBar />
        <Box></Box>
    </Stack>
}

export default Navbar