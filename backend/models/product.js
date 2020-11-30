const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  img: String,
  title: String,
  description: String,
  price: Number,
  numberDaysUntilEndDiscount: Number,
});

module.exports = mongoose.model('Product', productSchema, 'products');
