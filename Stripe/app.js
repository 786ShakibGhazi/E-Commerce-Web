// backend/server.js or app.js
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51PjOZERpp4us8UMW8fY1zCxrOta5yCEmBqfEDLCsWndKBs9jcDD0te1nPXc0HmHkgKUqHtEwmHD50GisjHYFgXpP00T9iJUAIS");
const app = express();

app.use(cors()); // Add CORS middleware
app.use(express.json());

// backend/server.js or app.js
app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { products } = req.body;
  
      if (!products || products.length === 0) {
        return res.status(400).json({ error: 'No products provided' });
      }
  
      const lineItems = products.map(product => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            Images:[product.img]
          },
          unit_amount: product.price * 100, // Price in cents
        },
        quantity: product.quantity,
      }));
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${"http://localhost:3000/shop"}`,
        cancel_url: `${"http://localhost:3000/home"}`,
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.listen(7000,()=>{
    console.log("server start")
})
  