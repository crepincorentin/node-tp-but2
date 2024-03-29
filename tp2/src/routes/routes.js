const express = require('express');
const router = express.Router();
const { createWatchlist, findWatchlist, addItemToWatchlist, updateItemStatus, 
    findWatchlistContent, deletewatchlist, notewatchlist} = require('../controllers/watchlist.js');
const {createUser, findUser, updateUser } = require ('../controllers/users.js');
const {addItem, findItem, deleteItem, deleteItemMany} = require ('../controllers/items.js');



router.post("/create", createUser);
router.get("/create/findone/:nom", findUser);
router.post("/create/update/:nom", updateUser);
// --------------------------------------------
router.post("/add", addItem);
router.get("/add/find/:nom", findItem);
router.get("/add/delete/:nom", deleteItem);
router.get("/add/deletemany/:nom", deleteItemMany);
// --------------------------------------------
router.post("/watchlist", createWatchlist);
router.get("/watchlist/find/:nom", findWatchlist);
router.post("/watchlist/add", addItemToWatchlist);
router.post("/watchlist/update/:id", updateItemStatus);
router.get("/watchlist/findcontent/:id", findWatchlistContent);
router.get("/watchlist/delete/:id", deletewatchlist);
router.post("/watchlist/note/:id", notewatchlist);





module.exports = router;