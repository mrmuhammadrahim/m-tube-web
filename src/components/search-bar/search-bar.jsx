import {Paper, IconButton} from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () =>{

    return <Paper component={"form"} className="searchBar-paper" sx={{ 
        border: " 1px solid #484545", 
        pr: "2px", 
        boxShadow: "none", 
        borderRadius: "20px",
    }}>
        <input type="text" placeholder="Search..." className="search-bar" />
        <IconButton>
            <Search></Search>
        </IconButton>
    </Paper>
}

export default SearchBar