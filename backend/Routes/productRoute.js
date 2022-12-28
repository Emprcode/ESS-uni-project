const express = require("express");
const router = express();

const {
  tokenValidation,
  authorization,
} = require("../Controller/authorizeController");

const {
  getProduct,
  addProduct,
  deleteProduct,
  postVerify,
} = require("../Controller/productController");

router.get(
  "/getProduct/:category",
  tokenValidation,
  authorization("admin", "user"),
  getProduct
);
router.post(
  "/addProduct",
  tokenValidation,
  authorization("admin", "user"),
  addProduct
);
router.delete(
  "/deleteProduct/:productId",
  tokenValidation,
  authorization("admin", "user"),
  deleteProduct
);

router.get(
  "/postVerify/:productId",
  tokenValidation,
  authorization("admin", "user"),
  postVerify
);

module.exports = router;
