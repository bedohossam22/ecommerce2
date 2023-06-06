import image1 from "./Images/img/category-1.jpg"
import image2 from "./Images/img/category-2.jpg"
import image3 from "./Images/img/category-3.jpg"
export default function Table(){
    return (
        <div className="table-container">
         
            <div className="child-two">
          
                <img src={image1} className="forgiven" alt="ok"></img>
                <div className="name">
                    
                    <h2>J.Crew Mecantile Women's Short-Sleeve</h2>
                    <p>Maborisasin in a tonto nesuing eget</p>
                    <p>distingy magndaipsubus</p>
                </div>
                <h1>110$</h1>
                <h1>In stock</h1>
                <h1>Add to cart</h1>
                <h1>-</h1>
            </div>
            <div className="child-Three">
          
                <img src={image2} className="forgiven" alt="ok"></img>
                <div className="name">
                    <h2>J.Crew Mecantile Women's Short-Sleeve</h2>
                    <p>Maborisasin in a tonto nesuing eget</p>
                    <p>distingy magndaipsubus</p>
                </div>
                <h1>110$</h1>
                <h1>In stock</h1>
                <h1>Add to cart</h1>
                <h1>-</h1>
            </div>
            <div className="child-Four">
          
                <img src={image3} className="forgiven" alt="ok"></img>
                <div className="name">
                    <h2>J.Crew Mecantile Women's Short-Sleeve</h2>
                    <p>Maborisasin in a tonto nesuing eget</p>
                    <p>distingy magndaipsubus</p>
                </div>
                <h1>110$</h1>
                <h1>In stock</h1>
                <h1>Add to cart</h1>
                <h1>-</h1>
            </div>
          
        </div>
        
    )
}