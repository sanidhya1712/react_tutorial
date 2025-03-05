import chefLogo from '../assets/chef-claude-icon.png';

export default function Header() {
    return (
        <header className="Header">
            <img className="imglogo" src={chefLogo} alt="globe icon" />
            <h1 className="h1text">Claude Chef</h1>
        </header>
    )
}