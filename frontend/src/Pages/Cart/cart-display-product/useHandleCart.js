function getCart() {
  if (localStorage.getItem("cartItems"))
   { return JSON.parse(localStorage.getItem("cartItems"))};

  localStorage.setItem("cartItems", JSON.stringify([{
    img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qysbfwlucvdhkvdgqsmv.jpg",
    title: "Dabur Vasant Kusumakar Ras with Gold & Pearl Tablet",
    MRP: "₹2120",
    price: " ₹1399",
    discount: "34%",
    rating: 4.2,
  }]));
  return [];
}

function addItemToCart({
  id,
  title,
  price,
  rating,
  quantity,
  img,
  date,
}) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  // console.log(cart);
  cart.push({ id, title, price, rating, quantity, img, date });
  // console.log(cart);
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function removeItemFromCart(id) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.filter((item) => item.id != id);
  localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function reduceItemQuantity(id) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.map((item) => {
    if (item.id == id && item.quantity > 1) item.quantity -= 1;

    return item;
  });
  localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function addItemQuantity(id) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.map((item) => {
    if (item.id == id) {
      item.quantity += 1;
    }

    return item;
  });
  localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function getOrders() {
  if (localStorage.getItem("orderItems"))
    return JSON.parse(localStorage.getItem("orderItems"));
}

function addOrderItem({
  id,
  name,
  price,
  rating,
  discription,
  quantity,
  img,
  date,
}) {
  const orders = JSON.parse(localStorage.getItem("orderItems")) || [];

  let flag = true;

  orders.map((item) => {
    if (item.id == id) flag = false;
  });

  if (flag) {
    orders.push({ id, name, price, rating, discription, quantity, img, date });
    localStorage.setItem("orderItems", JSON.stringify(orders));
  }
}

function addOrderArr(arr) {
  const orders = JSON.parse(localStorage.getItem("orderItems")) || [];
  orders.push(...arr);
  localStorage.setItem("orderItems", JSON.stringify(orders));
}




export {
  getCart,
  addItemToCart,
  removeItemFromCart,
  addItemQuantity,
  reduceItemQuantity,
  getOrders,
  addOrderItem,
  addOrderArr,
  
};
