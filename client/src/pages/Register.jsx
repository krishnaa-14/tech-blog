import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="authentication">
            <h1> Register </h1>
            <form> 
                <input type="text" placeholder="Username"/> 
                <input type="password" placeholder="Password"/> 
                <button> Submit </button>
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register;