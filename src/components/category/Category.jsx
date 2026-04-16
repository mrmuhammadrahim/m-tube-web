import { category } from "../../constants/index.jsx"
import { Button, Stack } from "@mui/material"

const Category = ({ setSelectedCategoryHandler, selectedCategory}) =>{

    return <Stack direction={"row"} m={"0px 15px"} sx={{ overflowX: "scroll", scrollbarWidth: "none", gap: "10px" }} >
        {category.map( item =>(
            <button 
                key={item.name} 
                className="category-btn" 
                onClick={ () => setSelectedCategoryHandler(item.name)} 
                style={{ background: item.name == selectedCategory && "#e4e2e3"}} 
            >
                <span style={{ color: "#fa2c21"}}>{item.icon}</span>
                <span style={{ color: item.name == selectedCategory && "rgb(48, 47, 47)"}} >{item.name}</span>
            </button>
        ) )}
    </Stack>
}

export default Category