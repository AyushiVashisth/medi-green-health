import { useState } from "react";

import "./CartDisplayProduct.css";
// import { addItemQuantity, reduceItemQuantity } from "./useHandleCart";
import { Link } from "react-router-dom";
import { UpdateCart } from "../../../redux/CartRouter/actionCart";
// import { useDispatch } from "react-redux";

function CartDisplayProduct(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const seller = " MediGreen ";
  const { id, name, image, price, rating, setState, handleRemove, item } =
    props;
  // const dispatch=useDispatch()
  function handleReduce() {
    UpdateCart(item, -1, item._id);
    setState((prev) => !prev);
    setQuantity(quantity - 1);
    // if (quantity > 1) {
    //   setQuantity(quantity - 1);
    // }
    // reduceItemQuantity(id);
    // props.setCartItems(getCart());
  }

  function handleAdd() {
    UpdateCart(item, 1, item._id);
    setState((prev) => !prev);
    setQuantity(quantity + 1);
  }

  if (quantity === 0) {
    return null;
  }

  return (
    <div className="single-cart-product-card">
      <div className="cart-card-flex">
        <div className="cart-product-image">
          <img src={image} alt={name} />
          <div className="cart-quantity-buttons">
            <button
              disabled={quantity <= 1}
              onClick={handleReduce}
              className="reduce"
            >
              -
            </button>
            {quantity}
            <button onClick={handleAdd} className="increase">
              +
            </button>
          </div>
        </div>
        <div className="cart-product-details">
          <Link to={`/products/${id}`}>
            <h3 className="capitalize">{name}</h3>
          </Link>
          <h6>Seller - {seller}</h6>
          <h3>Price - ₹{price}</h3>
          <p>Rating - {rating}</p>
          <div className="cart-product-buttons">
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDisplayProduct;
