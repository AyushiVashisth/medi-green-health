import CartDisplayProduct from "./cart-display-product/CartDisplayProduct";
import { useEffect, useState } from "react";
import "./CartPage.css";
import { Link, NavLink } from "react-router-dom";
import {
  getCart,
  removeItemFromCart,
  addOrderArr,
} from "./cart-display-product/useHandleCart";
import { Modal } from "@chakra-ui/react";
import { Scroller } from "./scroller";


function CartPage(props) {
  const cartItemst = getCart();
  

  const [cartItems, setCartItems] = useState(getCart() || []);
  const [cartItemsCount, setCartItemsCount] = useState(cartItemst.length);
  const [totalPrice, setTotalPrice] = useState(0);

  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("userAddress")) || {
      address: "",
      locality: "",
      city: "",
      state: "",
      pincode: "",
      landmark: "",
      isthere: false,
    }
  );

  const [open, setOpen] = useState(false);
  const [orderPlaceOpen, setOrderPlaceOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOrderOpen = () => {
    setOrderPlaceOpen(true);
  };

  const handleOrderClose = () => {
    setOrderPlaceOpen(false);
  };

  function handleRemove(id) {
    removeItemFromCart(id);
    setCartItems(getCart);
    setCartItemsCount(getCart().length);
  }

  const handleOrder = () => {
    handleOrderOpen();
    handleOpen();
    addOrderArr(cartItems);
    localStorage.setItem("cartItems", JSON.stringify([]));
    setCartItems([]);
    setCartItemsCount(getCart().length);
  };
  function calculateTotalPrice() {
    let total = 0;
    // setCartItems(getCart());
    cartItems.forEach((item) => {
      total += parseInt(item.quantity) * item.price;
    });
    setTotalPrice(total);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  //   if (cartItems.length === 0) {
  //     return (
  //       <>
  //         {/* <Navigationbar /> */}

  //         <div className="cart-page">
  //           <h1>No Items In Cart</h1>
  //           <Modal
  //             open={orderPlaceOpen}
  //             onClose={handleOrderClose}
  //             aria-labelledby="simple-modal-title"
  //             aria-describedby="simple-modal-description"
  //           >
  //             <div
  //               className="orderPlaced__mastercontainer"
  //               onClick={handleOrderClose}
  //             >
  //               <div
  //                 className="orderPlacedClip__container"
  //                 onClick={(e) => {
  //                   e.stopPropagation();
  //                 }}
  //               >
  //                 {/* <video
  //                                 className="orderPlacedClip__clip"
  //                                 src={orderPlacedClip}
  //                                 autoPlay
  //                                 loop
  //                             ></video> */}
  //                 <h1>Order Successfully Placed!!</h1>
  //                 <Link to="/orders">
  //                   <button className="orderPlacedClip__button">
  //                     See Orders
  //                   </button>
  //                 </Link>
  //               </div>
  //             </div>
  //           </Modal>
  //         </div>
  //       </>
  //     );
  //   }

  return (
    <>
      <div className="cart-page" >
        <div className="cart-page-left">
          <div className="cart-page-left-header">
            <h1>My Cart({cartItems.length})</h1>
            
          </div>

          {/* Map items here */}
          {cartItems.map((item) =>
          <CartDisplayProduct
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.img}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
                handleRemove={handleRemove}
                setCartItems={setCartItems}
              />
            
          )}
        </div>

        
        <div className="cart-page-right">
          <h1 className="cart-price-details">PRICE DETAILS</h1>
          <hr className="plane-hr" />
          <div className="cart-price">
            <h1>Price ({cartItems.length})</h1>
            <h1>₹{totalPrice * 1.25}</h1>
          </div>
          <div className="cart-discount">
            <h1>Discount</h1>
            <h1 className="disc">-₹{totalPrice?25:0}</h1>
          </div>
          <div className="cart-delivery-charges">
            <h1>Delivery Charges</h1>
            <h1 className="disc">₹ {totalPrice?33:0}</h1>
          </div>

          <hr className="dashed-hr" />
          <div className="cart-total">
            <h1 className="total-amt">Total Amount</h1>
            <h1>₹{totalPrice?totalPrice+31:0}</h1>
          </div>
          <div className="place-order-div">
            <NavLink to="/payments">
              <button onClick={handleOrder} className="place-order">
                Place Order
              </button>
            </NavLink>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default CartPage;
