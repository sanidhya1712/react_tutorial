import logo from '../assets/logo192.png';
import "./markup.css";

export default function HeaderCompnent () {
  return(
    <header className='header-top'>
        <img src={logo} className="markup-logo" alt="React logo"/>
        <nav>
          <ul className='nav-list'>
            <li className='nav-list-list'>Pricing</li>
            <li className='nav-list-list'>About</li>
            <li className='nav-list-list'>Contact</li>
          </ul>
        </nav>
      </header>
  )
}