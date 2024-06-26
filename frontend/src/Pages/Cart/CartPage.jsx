import CartDisplayProduct from "./cart-display-product/CartDisplayProduct";
import { useEffect, useState } from "react";
import "./CartPage.css";
import { NavLink } from "react-router-dom";
import { Scroller } from "./scroller";
import { DeleteCart } from "../../redux/CartRouter/actionCart";
import axios from "axios";
import Navbar1 from "../../Components/Navbar/Navbar1";
import Footer from "../../Components/Footer";
function CartPage(props) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(cartItems);
  const [state, setState] = useState(false);
  function handleRemove(id) {
    DeleteCart(id);
    setState((prev) => !prev);
  }
  const handleOrder = () => {
    localStorage.setItem("total", JSON.stringify(totalPrice));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  function calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].quantity * cartItems[i].price;
      // console.log(total);
    }
    setTotalPrice(total);
  }
  // console.log(totalPrice);
  const getData = async () => {
    await axios
      .get(`https://onemg-database.onrender.com/cart/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCartItems(res.data);
        // console.log(cartItems);
      })
      .then(() => {
        calculateTotalPrice();
        // console.log("from callback", totalPrice);
      });
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, cartItems.length, totalPrice]);
  return (
    <>
    <Navbar1/>
      <div className="cart-page">
        <div className="cart-page-left">
          <div className="cart-page-left-header">
            <h1>My Cart({cartItems.length})</h1>
          </div>
          {cartItems.length ? (
            cartItems.map((item) => (
              <CartDisplayProduct
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={+item.price}
                rating={item.rating}
                quantity={item.quantity}
                discount={item.discount}
                handleRemove={handleRemove}
                setCartItems={setCartItems}
                setState={setState}
                calculateTotalPrice={calculateTotalPrice}
                item={item}
              />
            ))
          ) : (
            <h1>No Items in cart</h1>
          )}
        </div>
        <div className="cart-page-right">
          <h1 className="cart-price-details">PRICE DETAILS</h1>
          <hr className="plane-hr" />
          <div className="cart-price">
            <h1>Price ({cartItems.length})</h1>
            <h1>₹{+totalPrice}</h1>
          </div>
          <div className="cart-discount">
            <h1>Discount</h1>
            <h1 className="disc">-₹{totalPrice ? 25 : 0}</h1>
          </div>
          <div className="cart-delivery-charges">
            <h1>Delivery Charges</h1>
            <h1 className="disc">₹ {totalPrice ? 33 : 0}</h1>
          </div>
          <hr className="dashed-hr" />
          <div className="cart-total">
            <h1 className="total-amt">Total Amount</h1>
            <h1>₹{totalPrice ? totalPrice + 8 : 0}</h1>
          </div>
          <div className="place-order-div">
            <NavLink to="/payments">
              <button onClick={handleOrder} className="place-order" >
                Place Order
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <Scroller />
      </div>
      <Footer/>
    </>
  );
}
export default CartPage;
