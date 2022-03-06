const Product = require("../Models/ProductModel")
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./VerifyToken")

const router = require("express").Router()

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body)

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
    console.log('product created with success')
  } catch (err) {
    res.status(500).json(err)
    console.log('err product creation',err)

  }
})

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedProduct)
    console.log("product updated with success")
  } catch (err) {
    res.status(500).json(err)
    console.log('err product update',err)
  }
})

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json("Product has been deleted...")
    console.log('product deleted with success')
  } catch (err) {
    res.status(500).json(err)
    console.log('err product delete',err)
  }
})

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
    console.log("get one product = success")
  } catch (err) {
    res.status(500).json(err)
    console.log('err get creation',err)
  }
})

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new
  const qCategory = req.query.category
  try {
    let products
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1)
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      })
    } else {
      products = await Product.find()
    }
    res.status(200).json(products)
    console.log("get all products with success")
  } catch (err) {
    res.status(500).json(err)
    console.log('err get all products',err)
  }
})

module.exports = router