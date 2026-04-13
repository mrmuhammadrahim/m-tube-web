import { Button } from "@mui/material"
import { Link } from "react-router"

const Main = () =>{

    return (
    <Link to={ "/channel" } >
        <Button>Channel</Button>
    </Link>
    )
}

export default Main