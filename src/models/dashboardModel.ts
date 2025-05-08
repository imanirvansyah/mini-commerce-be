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
      id: "ord202505020001",
      product: [
        {
          name: "Product 1",
          variant: "variant B",
          qty: 4
        },
        {
          name: "Product 4",
          variant: "variant D",
          qty: 2
        },
        {
          name: "Product 4",
          variant: "variant C",
          qty: 1
        }
      ],
      customerName: "Bob Brown",
      datePurchase: "03-05-2025",
      totalPurchase: 917898,
      paymentStatus: {
        label: "Success",
        variant: "success"
      },
      shipping: {
        id: "TRK202505020001",
        name: "Fast Delivery",
        status: {
          label: "Shipping",
          variant: "success"
        }
      }
    },
    {
      id: "ord202505020002",
      product: [
        {
          name: "Product 3",
          variant: "variant C",
          qty: 3
        },
        {
          name: "Product 2",
          variant: "variant E",
          qty: 2
        }
      ],
      customerName: "John Doe",
      datePurchase: "03-05-2025",
      totalPurchase: 1027255,
      paymentStatus: {
        label: "Failed",
        variant: "danger"
      },
      shipping: {
        id: "TRK202505020002",
        name: "Standard Shipping",
        status: {
          label: "Canceled",
          variant: "danger"
        }
      }
    }
  ]
}

