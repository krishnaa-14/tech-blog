import blog_logo from '../assets/blog_logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo"><img src={blog_logo} /></div>
                <div className="links">
                    <Link className="link"> Home </Link>
                    <Link className="link"> Tech </Link>
                    <Link className="link"> Food </Link>
                    <span> @durgakrishnavamsi@gmail.com </span>
                    <span> Logout </span>
                    <div className="write">
                        <Link className="link-write"> Create </Link>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Header;