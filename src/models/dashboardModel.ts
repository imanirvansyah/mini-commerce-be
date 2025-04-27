import { Dashboard } from "../types/dashboard"

export const dashboard: Dashboard = {
  todayRevenue: 100,
  todaysOrders: 100,
  NeedToShip: 100,
  onHoldOrders: 100,
  chart: {
    revenue: [
      { month: "January", total: 186 },
      { month: "February", total: 305 },
      { month: "March", total: 237 },
      { month: "April", total: 73 },
      { month: "May", total: 209 },
      { month: "June", total: 214 },
      { month: "July", total: 186 },
      { month: "August", total: 305 },
      { month: "September", total: 237 },
      { month: "October", total: 73 },
      { month: "November", total: 209 },
      { month: "December", total: 214 },
    ],
    products: [
      { name: "Shoes", total: 186 },
      { name: "Clothes", total: 305 },
      { name: "Electronics", total: 237 },
      { name: "Books", total: 73 },
      { name: "Toys", total: 209 },
      { name: "Furniture", total: 214 },
    ]
  },
  orderList: [
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
    }
  ]
}

