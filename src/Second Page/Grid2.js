import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import image1 from "../Images/img/category-1.jpg";
import image2 from "../Images/img/category-2.jpg";
import image3 from "../Images/img/category-3.jpg";
import image4 from "../Images/img/category-4.jpg";
import image5 from "../Images/img/category-5.jpg";
import image6 from "../Images/img/category-6.jpg";
import image7 from "../Images/img/category-7.jpg";
import image8 from "../Images/img/product-1-1.jpg";
import image9 from "../Images/img/product-1-2.jpg";
import image10 from "../Images/img/product-10-1.jpg";
import image11 from "../Images/img/product-10-2.jpg";
import image12 from "../Images/img/product-11-1.jpg";
import image13 from "../Images/img/product-11-2.jpg";
import image14 from "../Images/img/product-12-1.jpg";
import image15 from "../Images/img/product-12-2.jpg";
import image16 from "../Images/img/product-13-1.jpg";
import image17 from "../Images/img/product-9-1.jpg";
import image18 from "../Images/img/product-9-2.jpg";
import image19 from "../Images/img/product-2-1.jpg";
import image20 from "../Images/img/product-2-2.jpg";

export default function Grid() {
    const images = [
      image1, image2, image3, image4, image5, image6, image7,
      image8, image9, image10, image11, image12, image13, 
      image14, image15, image16, image17, image18, image19, image20
    ];  
    const ProductName = [ 'T-Shirt M' , 'Bag' , 'Sandals1' , 'Hat', 'Shoe'
    ,'Belo' , 'Jenzo' , 'T-Shirt L' , 'T-Shirt S', 'Sandals2' , 'Sandals3' ,
    'Jeans2' , 'Jeans3' , 'Shirt 1' , 'Shirt 2' , 'Bag2' , 'Shirt 3', 'Shirt 4',
    'Shirt 5' , 'Shirt 6'];
  
    return (
      <div className="grid-container">
        <div className="Grid">
          {images.map((image, index) => (
            <div key={index} className='description2'>
              <img src={image} alt={`product-${index + 1}`} className='no-offense'/>
              <h1>{ProductName[index]}</h1>
              <span id='Rob'>Clothing</span>
              <p>Colorful Pattern Shirts</p>
              <h3>$238.85 <span>$245.8</span></h3>
              <div className='iconzo'>
                <div className='stars'>
              <FontAwesomeIcon icon={faStar}  className='space'/>
              <FontAwesomeIcon icon={faStar}  className='space'/>
              <FontAwesomeIcon icon={faStar}  className='space'/>
              <FontAwesomeIcon icon={faStar}  className='space'/>
              <FontAwesomeIcon icon={faStar}  className='space'/>
              </div>
              <div className='card'>
              <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }