import blog_logo from '../assets/blog_logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
            <img src={blog_logo} />
            <span> Made with Love by @durgakrishnavamsi </span>
            </div>
        </div>
    )
}

export default Footer;