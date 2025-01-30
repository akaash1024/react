
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

export const Header = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header>
            <div>
                <h1>Header</h1>
                <section className="nav navvar">
                    <nav>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/product'}>Product</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                        
                        {
                            isLoggedIn ? (<button onClick={logout}>Logout</button>) : (<NavLink to={'/login'}>Login</NavLink>)
                        }
                    </nav>
                </section>
            </div>
        </header>
    )
}