const express = require("express");
const app = express();
const { receiveAllWishlist, enter, clear } = require("./controller.js");

// const { receiveofficialsName } = require("./controller.js");

const PORT = 4000;

// app.get("api/officialsName", receiveOfficialsName);
app.get("/api/wishlist", receiveAllWishlist);
// app.post("api/wishlist", enterData);
app.get("/api/officialsName/:title", enter);
app.get("/api/officialStateName/:title", clear)

// app.delete("/api/wishlist/", clearWishlist);
// app.delete("/api/officialsName", clearOfficialsName);

app.listen(PORT, () => console.log(`hello ${PORT}`));
