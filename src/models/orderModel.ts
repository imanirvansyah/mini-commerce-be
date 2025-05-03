import { Order, PaymentStatus, ShippingStatus, Product } from "../types/order";


function generateDummyOrders(count: number): Order[] {
  const productNames = ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6"];
  const variants = ["variant A", "variant B", "variant C", "variant D", "variant E"];
  const customerNames = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis"];
  const paymentStatuses: PaymentStatus[] = [
    { label: "Success", variant: "success" },
    { label: "Pending", variant: "warning" },
    { label: "Failed", variant: "danger" }
  ];
  const shippingNames = ["Cargo Express", "Fast Delivery", "Standard Shipping"];
  const shippingStatuses: ShippingStatus[] = [
    { label: "Shipping", variant: "success" },
    { label: "Processing", variant: "warning" },
    { label: "Canceled", variant: "danger" }
  ];

  const orders: Order[] = [];

  for (let i = 1; i <= count; i++) {
    const numProducts = Math.floor(Math.random() * 3) + 1; // 1-3 products
    const products: Product[] = [];

    for (let j = 0; j < numProducts; j++) {
      const productName = productNames[Math.floor(Math.random() * productNames.length)];
      const variant = variants[Math.floor(Math.random() * variants.length)];
      const qty = Math.floor(Math.random() * 5) + 1; // 1-5 qty
      products.push({ name: productName, variant, qty });
    }

    const customerName = customerNames[Math.floor(Math.random() * customerNames.length)];
    const datePurchase = "03-05-2025"; // You can randomize this later if needed
    const totalPurchase = Math.floor(Math.random() * 1000000) + 100000; // 100,000 - 1,100,000
    const paymentStatus = paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)];
    const shippingId = `TRK20250502000${i}`;
    const shippingName = shippingNames[Math.floor(Math.random() * shippingNames.length)];
    const shippingStatus = shippingStatuses[Math.floor(Math.random() * shippingStatuses.length)];

    orders.push({
      id: `ord20250502000${i}`,
      product: products,
      customerName,
      datePurchase,
      totalPurchase,
      paymentStatus,
      shipping: {
        id: shippingId,
        name: shippingName,
        status: shippingStatus
      }
    });
  }

  return orders;
}

export default generateDummyOrders(10);