import { useState } from "react"
import { Link } from 'react-router-dom'
import { Button } from "./Button"
import './styles/navbar.scss'

export function Navbar() {

    const [ navbutton, setbutton ] = useState(false)

    const [mobile, setMobile ] = useState(window.innerWidth <= 600)

    const handleClick = () => {
        setbutton(!navbutton)
    }

    window.addEventListener('resize', (() => {
        if (window.innerWidth <= 600) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }))

    return (
        <>
            <div className="navbar">
                <div className="nav-container">
                    <ul>
                        <li>
                            <div className="logo">
                                TRVL
                                <i class="fab fa-react"></i>
                            </div>
                        </li>
                        {mobile ?
                        <li onClick={handleClick}>
                            <i className={navbutton ? "fas fa-times" : "fas fa-bars"}></i>
                        </li>
                        :
                        <div className="navbar-content">
                             <Link to="/">
                                <li>
                                    Home
                                </li>
                            </Link>
                             <Link to="/">
                                <li>
                                    Services
                                </li>
                            </Link>
                             <Link to="/">
                                <li>
                                    About
                                </li>
                            </Link>
                            <Button size="btn-small" style="btn-navbar">
                                Sign Up
                            </Button>
                        </div>
                        }
                    </ul>
                </div>
            </div>
            {navbutton && 
            <aside>
                <div className="aside-container">
                    <ul>
                        <Link to="/">
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link to="/">
                            <li>
                                Services
                            </li>
                        </Link>
                        <Link to="/">
                            <li>
                                About
                            </li>
                        </Link>
                        <Button size="btn-medium" style="btn-navbar">
                            Sign Up
                        </Button>
                    </ul>
                </div>
            </aside>
            }
        </>
    )
}