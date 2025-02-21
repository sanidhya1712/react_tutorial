import logo from '../assets/logo192.png';
import "./markup.css";

export default function NavBarCompnent () {
  return(
    <header className='header'>
        <nav className='nav-bar'>
            <img src={logo} className="markup-logo" alt="React logo"/>
            <span className='span'>ReactFacts</span>
        </nav>
      </header>
  )
}