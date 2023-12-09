import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Home(){
    const navigate = useNavigate()
    useEffect(() => {
        navigate("mercury")
    },[])
    return(
        <h1>home</h1>
    )
}

export default Home