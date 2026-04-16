import { Stack, Box, Container, Typography } from "@mui/material"
import { useState} from "react"
import { Videos, Category } from "../index.js"

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState("New")
    const setSelectedCategoryHandler = category => setSelectedCategory(category)

    console.log(import.meta.env.VITE_RAPIDAPI_KEY)

    return (
        <Stack>
            <Category setSelectedCategoryHandler={setSelectedCategoryHandler} selectedCategory={selectedCategory} />
            <Box p={2} sx={{ height: "90vh" }}> {/* ← shu qo'shildi */}
                <Container maxWidth="lg"> {/* ← "90%" emas, "lg" */}
                    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#ff5252" }}>
                        {selectedCategory} <span style={{ color: "#fff" }}>videos</span>
                    </Typography>
                    <Videos />
                </Container>
            </Box>
        </Stack>
    )
}


export default Main