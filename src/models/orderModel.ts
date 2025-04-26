import { Order } from "../types/order";

const orders: Order[] = [
  {
    name: "John Doe",
    orderId: "ORD123456",
    shippingStatus: "Shipped",
    totalPrice: 500000,
    items: [
      {
        name: "Product 1",
        variant: "Red",
        qty: 2,
        price: 200000,
      },
      {
        name: "Product 2",
        variant: "Blue",
        qty: 1,
        price: 300000,
      },
    ],
  },
  {
    name: "Jane Smith",
    orderId: "ORD654321",
    shippingStatus: "Pending",
    totalPrice: 700000,
    items: [
      {
        name: "Product 3",
        variant: "Green",
        qty: 3,
        price: 700000,
      },
    ],
  },
]

export default orders;