import { useNavigate } from "react-router-dom"

export function Home(){
    const navigate = useNavigate()

    const loginButton = () => {
        navigate('/login')
    }

    return(
        <div>
            <h1>Home</h1>
            <button onClick={loginButton}>Login</button>
        </div>
    )
}