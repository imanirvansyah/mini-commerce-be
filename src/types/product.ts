export interface Product {
  id: number;
  productName: string;
  productDescription: string;
  category: string;
  price: number;
  totalQty: number;
  isAllSize: boolean;
  isNoVariant: boolean;
  size?: { name: string }[];
  variant?: { name: string, qty: number }[];
}