import './Header.css';

function Header() {
    return (
        <nav className="navHeader">
            <label>LikeHome</label>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </nav>
    );
}

export default Header;