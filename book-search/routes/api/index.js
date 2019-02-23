
const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
//the two routes defined should be /books/ and /books/:id/
router.use("/books", bookRoutes);


module.exports = router;
