import React from 'react';
import Header from './Header';
import Interface from './Interface';
import Introduction from './Introduction';
import Swipe from './Swiper';
import Grid from './Grid';
import Offers from './Offers';
import Footer from './Footer';
import Ending from './Ending';
/* import Shop from './Second Page/Shop'; */
import "./style.css";
export default function App() {
  return (
    <div>
      <Header />
      <Interface />
      <Introduction />
      <Swipe />
      <Grid />
      <Offers />
      <Footer />
      <Ending />
    </div>
  );
}