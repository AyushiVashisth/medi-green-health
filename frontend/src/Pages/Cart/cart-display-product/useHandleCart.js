function getCart() {
  if (localStorage.getItem("cartItems")) {
    return JSON.parse(localStorage.getItem("cartItems"));
  }

  // localStorage.setItem("cartItems", JSON.stringify([
  // {
  //   "_id": "12",
  //   "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/vitamin-supplement/b/2/z/90-salmon-fish-oil-omega-3-capsule-1000-mg-with-epa-180mg-and-original-imaghhwh67puse6s.jpeg?q=70",
  //   "title": "CF Salmon Fish Oil Omega 3 Capsule 1000 mg with EPA 180...",
  //   "price": 695,
  //   "rating": 4.4,
  //   "discount": 31,
  //   "quantity":1,
  //   "category": "supplement"
  // }]));
  return [];
}

function addItemToCart({
  id,
  title,
  price,
  rating,
  quantity,
  img
  // discount,
  // category
}) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  // console.log(cart);
  cart.push({ id, title, price, rating, quantity, img });
  // console.log(cart);
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function removeItemFromCart(id) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function reduceItemQuantity(id) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.map((item) => {
    if (item.id === id && item.quantity > 1) item.quantity -= 1;

    return item;
  });
  localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function addItemQuantity(id) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.map((item) => {
    if (item.id === id) {
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
  date
}) {
  const orders = JSON.parse(localStorage.getItem("orderItems")) || [];

  let flag = true;

  orders.map((item) => {
    if (item.id === id) flag = false;
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
  addOrderArr
};
