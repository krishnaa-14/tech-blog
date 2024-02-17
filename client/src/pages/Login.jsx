import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="authentication">
            <h1> Login </h1>
            <form> 
                <input type="text" placeholder="Username"/> 
                <input type="password" placeholder="Password"/> 
                <button> Login </button>
                <span>Dont have an accont? <Link to="/register">Register Here</Link></span>
            </form>
        </div>
    )
}

export default Login;