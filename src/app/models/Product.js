const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Arro 1kg marca X',
    price: 7.8
  },
  {
    id: 2,
    name: 'Nescau Cereal',
    price: 5.0
  },
  {
    id: 3,
    name: 'Danoninho Ice',
    price: 4.30
  }
]

class Product {

  async findAll() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return MOCK_PRODUCTS;
  }

  async findByPk(id) {
    const product = MOCK_PRODUCTS.find(item => item.id == id);
    return product;
  }

  async create(name, price) {
    const newProduct = {
      id: MOCK_PRODUCTS.length + 1,
      name: name,
      price: price
    };
    MOCK_PRODUCTS.push(newProduct);

    return newProduct
  }

  async update(id, name, price) {
    const newProduct = {
      name,
      price
    }

    MOCK_PRODUCTS[id + 1] = { ...newProduct, ...MOCK_PRODUCTS[id + 1] }
    return this.findByPk(id)
  }

  async destroy() { }
}

export default new Product();