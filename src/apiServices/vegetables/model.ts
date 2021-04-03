import mongoose, {Schema} from "mongoose";
import {vegetableType} from './types';

mongoose.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "connection error");
});
db.once("open", () => {
  console.log("conected to database");
});

const vegetableSchema:Schema = new Schema({
  name: String,
  sku: String,
  smallDescription: String,
  longDescription: String,
  category: String,
  inStock: Boolean,
  sellUnit: String,
  unitPrice: Number,
  unitPriceBefore: Number,
  freshness: String,
  delivery: String,
  deliveryArea: String,
  brand: String,
  farm: String,
  tag: [String, String, String],
  subCategories: {
    exoticVeggies: Boolean,
    organicVegetables: Boolean,
    cutsAndSprouts: Boolean,
    herbsAndSeasonings: Boolean,
    beansAndPeas: Boolean,
  },
  pictures: [
    {
      big: String,
      medium: String,
      small: String,
    },
    {
      big: String,
      medium: String,
      small: String,
    },
    {
      big: String,
      medium: String,
      small: String,
    },
  ],
});

export const vegetable:mongoose.Model<vegetableType> = mongoose.model("vegetable", vegetableSchema);


