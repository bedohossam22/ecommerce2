import image1 from "./Images/img/home-img.png";
export default function Introduction(){
    return (
        <div className="introduction">
            <div className="left-side">
            <p>Hot Promotions</p>
            <h2>Fashion Trending</h2>
            <h1>Great Collection</h1>
            <span>Save more with coupons & up to 20% off</span>
            <button className="btn-2">Shop now</button>
            </div>
            <div className="right-side">
            <img src={image1} alt="ok"></img>
            </div>
        </div>
    )
}