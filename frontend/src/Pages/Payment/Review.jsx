import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const total=JSON.parse(localStorage.getItem("total"))
console.log(total)
const products = [...cartItems, { title: "Shipping", desc: "", price: "30" }];
console.log(products);
const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  const [addressData, setAddresData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  useEffect(() => {
    let Data = JSON.parse(localStorage.getItem("addressDetails"));
    let card = JSON.parse(localStorage.getItem("card"));
    setAddresData({ ...addressData, ...Data });
    setCard({ ...card });
  }, []);
  //console.log(addressData)
  //console.log(card)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product, index) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={index<products.length-1?`Product${index + 1}`:""}
              secondary={`${product.title}`}
            />
            <Typography variant="body2">₹{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ₹{+total+30}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{addressData.firstName}</Typography>
          <Typography gutterBottom>
            {addressData.address1},{addressData.address2}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>

          {/* const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
]; */}
          <Grid container>
            <React.Fragment key={card.cardName}>
              <Grid item xs={6}>
                <Typography gutterBottom>{"Card"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{"VISA"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{"Name"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{card.cardName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{"ExpDate"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{card.expDate}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography gutterBottom>{"Card number"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{"xxxx-xxxx-xxxx-1234"}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
