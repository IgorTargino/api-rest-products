import Product from "../../models/Product"


class ProductsController {

  async index(req, res) {
    const products = await Product.findAll()

    return res.status(200).json(products)
  }

  async find(req, res) {
    const product = await Product.findByPk(req.params.id)
    return res.status(200).json(product)
  }

  async create(req, res) {
    const { name, price } = req.body;

    if (price < 0) {
      return res.status(400).json({
        success: false,
        error: 'The price cannot be a negative value'
      })
    }

    const newProduct = await Product.create(name, price)
    return res.status(201).json(newProduct)
  }

  async update(req, res) {
    const { name, price } = req.body;
    const { id } = req.params;

    if (price < 0) {
      return res.status(400).json({
        success: false,
        error: 'The price cannot be a negative value'
      })
    }

    const newProduct = await Product.update(id, name, price)
    return res.status(201).json(newProduct)
  }

  delete(req, res) {
    return res.json({ success: true })
  }
}


export default new ProductsController()