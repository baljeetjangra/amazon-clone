import React from "react";
import "../assets/css/Home.css";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* products */}
      <div className="home__row">
        <Product
          id="1"
          title="Home Centre Quadro Solid Mesh Back Chair (Black)"
          price={500}
          rating={4}
          image="https://m.media-amazon.com/images/I/71GpeZc0U6L._AC_UL320_.jpg"
        />
        <Product
          id="2"
          title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop"
          price={999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX Nikkor 18-55mm "
          price={1500}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61A4tg5IFhL._SL1000_.jpg"
        />
        <Product
          id="4"
          title="Amazfit Huami Bip Touch Screen Smartwatch A1608 (Onyx Black)"
          price={99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61b7GRV385L._SL1500_.jpg"
        />
        <Product
          id="5"
          title="Think and Grow Rich (English) Kindle Edition"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/41fc3PgmvbL._SY346_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Samsung 138 cm (55 Inches) Wondertainment Series Ultra HD LED Smart TV UA55TUE60AKXXL (Titan Gray) (2020 model)"
          price={999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81a5%2BITwX4L._SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
