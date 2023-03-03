import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImage from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Your Cart is Currently Empty! <span>😔</span></h2>
        <p>
          Before proceed to checkout you must add some pizzas to your shopping
          cart.
          <br />
          You will find our delicious pizzas on our "Home" page.
        </p>
        <img src={cartEmptyImage} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Return to Shop</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
