const config = require('./dbConfig');
const sql = require('myssl');
const { default: Product } = require('../Components/Product');
const getProducts = async() =>  {
   try {
       let pool = await sql.connect(config);
    let myProducts = pool.request().query(" SELECT * FROM product")
    console.log(myProducts);
    return myProducts;
   }
   catch(error){
       console.log(error)

   }
}

const createProduct = async(Product) => {
    try{
        let pool = await sql.connect(config);
        let myProducts = pool.request().query(`INSERT INTO product VALUES (${Product.productImage}, '${Product.productName}', ${Product.price})`)
        return myProducts

    }
    catch(error){
console.log(error)
        
    }
}

module.exports = {
    createProduct, 
    getProducts
}
