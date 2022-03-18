const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

app.use(
    cors({
        origin: "http://localhost:3000",
    })
)

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))


app.get('/',  (req, res) =>{
    res.send("its working ig.")
});

// making the images/pc-products and images/pc-products directory publicly accessed
app.use('/images/products', express.static(__dirname + '/images/pc-products'));
app.use('/images/products', express.static(__dirname + '/images/pc-products'));


// routes for api requests
app.use("/api", require("./routes/ProductsRouter.js"))
app.use("/api", require("./routes/CategoriesRouter.js"))
app.use("/api", require("./routes/SubCategoriesRouter.js"))
app.use("/api", require("./routes/AdminsRouter.js"))
app.use("/api", require("./routes/PermissionsRouter.js"))

app.listen(3001, () =>{
    console.log("running on 3001.");
})