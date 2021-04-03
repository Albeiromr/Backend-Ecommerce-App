import {Document} from 'mongoose';

export interface vegetableType extends Document {
  name: string;
  sku: string;
  smallDescription: string;
  longDescription: string;
  category: string;
  inStock: boolean;
  sellUnit: string;
  unitPrice: number;
  unitPriceBefore: number;
  freshness: string;
  delivery: string;
  deliveryArea: string;
  brand: string;
  farm: string;
  tag: [string, string, string];
  subCategories: {
    exoticVeggies: boolean;
    organicVegetables: boolean;
    cutsAndSprouts: boolean;
    herbsAndSeasonings: boolean;
    beansAndPeas: boolean;
  };
  pictures: [
    {
      big: string;
      medium: string;
      small: string;
    },
    {
      big: String;
      medium: String;
      small: String;
    },
    {
      big: string;
      medium: string;
      small: string;
    }
  ];
};
