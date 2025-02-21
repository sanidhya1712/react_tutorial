import logo from '../assets/logo192.png';
import "./markup.css";

export default function ArticleComponent (props) {
  return(
    <div className="contacts">
        <article className="contact-card">
            <img 
                src={logo}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img 
                    src="./images/phone-icon.png" 
                    alt="phone icon" 
                />
                <p>{props.contact}</p>
            </div>
            <div className="info-group">
                <img 
                    src="./images/mail-icon.png" 
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    </div>
  )
}