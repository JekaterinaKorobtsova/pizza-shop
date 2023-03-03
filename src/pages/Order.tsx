import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import pizzaComplited from "../assets/img/pizza-complited.jpg";
import { clearItems } from "../redux/cart/slice";

const Order: React.FC = () => {
const dispatch = useDispatch();

const clearCart= () => {
      dispatch(clearItems());
};


  return (
    <>
      <div className="cart cart--complited">
        <img src={pizzaComplited} alt="pizza order complited" />
        <h2>Thank You for Order! </h2>
        <p>
          Your pizza is preparing now!
          <br />
          Our courier will contact You!
        </p>
        <Link to="/" className="button button--black" onClick={clearCart}>
          <span>Return to Shop</span>
        </Link>
      </div>

    </>
  );
};

export default Order;
