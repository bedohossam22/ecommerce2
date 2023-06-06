import deal1 from "./Images/img/deals-1.jpg";
import deal2 from "./Images/img/deals-2.png";
import Countdown from 'react-countdown';

export default function Offers() {
  return (
    <div className="offers">
      <div>
        <img src={deal1} alt="ok" />
        <div className="first-offer">
          <h1>Deal of the day</h1>
          <p>Summer Collection New Modern Design</p>
          <span>$139.00</span>
          <button>Shop Now</button>
          <h2>Offers Expires in :</h2>
          <Countdown 
            date={Date.now() + 2 * 60 * 60 * 1000}
            renderer={({ hours, minutes, seconds }) => (
              <h3>
                <span>{hours.toString().padStart(2, '0')}</span> : 
                <span>{minutes.toString().padStart(2, '0')}</span> : 
                <span>{seconds.toString().padStart(2, '0')}</span>
              </h3>
            )}
          />
        </div>
      </div>
      <div>
        <img src={deal2} alt="ok" />
        <div id="trial" className="second-offer">
          <h1>Deal of the day</h1>
          <p>Summer Collection New Modern Design</p>
          <span>$139.00</span>
          <button>Shop Now</button>
          <h2>Offers Expires in :</h2>
          <Countdown 
            date={Date.now() + 2 * 60 * 60 * 1000}
            renderer={({ hours, minutes, seconds }) => (
              <h3>
                <span>{hours.toString().padStart(2, '0')}</span> : 
                <span>{minutes.toString().padStart(2, '0')}</span> : 
                <span>{seconds.toString().padStart(2, '0')}</span>
              </h3>
            )}
          />
        </div>
      </div>
    </div>
  );
}