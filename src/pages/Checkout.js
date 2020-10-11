import React from "react";
import "../assets/css/Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shoping Basket is empty</h2>
            <p>
              You have no items in your basket. To but one or more clock "Add To
              Basket" next to item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shoping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>Subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
