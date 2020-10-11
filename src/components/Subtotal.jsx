import React from "react";
import "../assets/css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.legth} items ): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contain gift
            </small>
          </>
        )}
        decimatScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed Now</button>
    </div>
  );
};

export default Subtotal;
