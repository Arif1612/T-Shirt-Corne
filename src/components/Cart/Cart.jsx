import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some product</p>;
  } else {
    message = <div>Thanks for your shopping</div>;
  }
  return (
    <div>
      <h2
        className="text-2xl font-bold
      "
      >
        Order Summary: {cart.length};
      </h2>
      {cart.length <= 0 ? "hur mia jinis ken" : "aiiiii kinte thako"};
      <h4 className="text-2xl">{message}</h4>
      {cart.map((tshirt) => {
        return (
          <p key={tshirt._id}>
            {tshirt.name}{" "}
            <button
              className="btn"
              onClick={() => handleRemoveFromCart(tshirt._id)}
            >
              x
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default Cart;
