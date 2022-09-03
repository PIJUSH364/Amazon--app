import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/JanArt/Gateway/MainBanner_1500_300_1701.jpg"
          alt=""
        />
        {/*all land page  product  item contain below*/}
        <div className="home_row">
          <Product
            id="5456464426"
            title="Atomic Habits English  (Paperback, James Clear)"
            image="../images/img1.jpg"
            price="19.99"
            rating={4}
          />
          <Product
            id="5456464427"
            title="Croma 500W Mixer Grinder with 3 Stainless Steel Leak-proof Jars, 3 speed & Pulse function, 2 years warranty"
            image="../images/img5.png"
            price="19.99"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="5456464428"
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
            image="../images/img3.png"
            price="19.99"
            rating={4}
          />

          <Product
            id="5456464429"
            title="Apple iPad 9th Gen 2021 25.91 cm (10.2 inch) Wi-Fi Tablet , 64 GB, Space Grey, MK2K3HN/A"
            image="../images/img4.png"
            price="19.99"
            rating={4}
          />
          <Product
            id="5456464436"
            title="Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular"
            image="../images/img2.png"
            price="19.99"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="5456464437"
            title="Samsung 123.9cm (49) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL
            Samsung 123.9cm (49Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz R  fresh Rate - LC49G95TSSWXXL"
            image="../images/img6.png"
            price="19.99"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
