import {useNavigate} from 'react-router-dom'

function Navbar (props) {
    let navigation = useNavigate()
    
    function home(){
        navigation('/')
    }

    return (
        <div className="container-md">
            <nav className="desktop navbar navbar-expand-lg navbar-light w-100 pt-4">
                <div className="container-md nav-justify-content-between">
                        <div>
                            <a onClick={home}>
                            <img src="asset/logo.jpg" alt="Responsive image" />
                            </a>
                            
                        </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a href="#our-service" className="nav-link mx-2">Our Service</a>
                            </li>
                            <li className="nav-item">
                                <a href="#why-us" className="nav-link mx-2">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonial" className="nav-link mx-2">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a href="#faq" className="nav-link mx-2">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-success mx-2">Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar ;