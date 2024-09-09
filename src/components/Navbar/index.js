import CustomButton from '../CustomButton';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    TAY
                </div>
                <div className='buttons'>
                    <ul className='nav-links'>
                        <li>
                            <a href="google.com">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="google.com">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="google.com">
                                Study Case
                            </a>
                        </li>
                    </ul>
                    <CustomButton>
                        Hire Me
                    </CustomButton>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;