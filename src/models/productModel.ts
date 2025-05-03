import { Product } from "../types/product";

const products: Product[] = [
  {
    id: 1,
    productName: "Product 1",
    productDescription: "this is product 1",
    category: "Category 1",
    price: 100000,
    totalQty: 30,
    isAllSize: true,
    isNoVariant: true,
    size: [],
    variant: []
  },
  {
    id: 2,
    productName: "Product 2",
    productDescription: "this is product 2",
    category: "Category 2",
    price: 200000,
    totalQty: 20,
    isAllSize: false,
    isNoVariant: false,
    size: [{ name: "S" }, { name: "M" }, { name: "L" }],
    variant: [{ name: "Red", qty: 10 }, { name: "Blue", qty: 10 }]
  },
  {
    id: 1,
    productName: "Product 1",
    productDescription: "this is product 1",
    category: "Category 1",
    price: 100000,
    totalQty: 30,
    isAllSize: true,
    isNoVariant: true,
    size: [],
    variant: []
  },
  {
    id: 2,
    productName: "Product 2",
    productDescription: "this is product 2",
    category: "Category 2",
    price: 200000,
    totalQty: 20,
    isAllSize: false,
    isNoVariant: false,
    size: [{ name: "S" }, { name: "M" }, { name: "L" }],
    variant: [{ name: "Red", qty: 10 }, { name: "Blue", qty: 10 }]
  },
  {
    id: 1,
    productName: "Product 1",
    productDescription: "this is product 1",
    category: "Category 1",
    price: 100000,
    totalQty: 30,
    isAllSize: true,
    isNoVariant: true,
    size: [],
    variant: []
  }
];

export default products;