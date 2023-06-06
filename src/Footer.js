import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer(){
    return (
    <div className="header-container extra">
    <div className="header">
    <h1> <FontAwesomeIcon icon={faEnvelope} /> <span>Signup to NewSletter</span></h1>
    <h2>...and receive 25% coupon for first shopping
</h2>
    <div className="buttons">
        <input type="email" placeholder='Your Email' className='bar'></input>
        <button className='btn'>Subscribe</button>
    </div>
    </div>
</div>
)}