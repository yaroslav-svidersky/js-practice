const orders = [
  { id: 1, customer: "Анна", total: 1200, status: "delivered" },
  { id: 2, customer: "Иван", total: 450, status: "cancelled" },
  { id: 3, customer: "Анна", total: 3100, status: "delivered" },
  { id: 4, customer: "Пётр", total: 780, status: "pending" },
  { id: 5, customer: "Мария", total: 2500, status: "delivered" },
  { id: 6, customer: "Иван", total: 990, status: "pending" },
];

console.log(orders.find((order) => order.id === 4)); // { id: 4, customer: 'Пётр', total: 780, status: 'pending' }
console.log(orders.some((order) => order.status === "cancelled")); // true
console.log(orders.every((order) => order.total > 400)); // true
console.log(
  orders
    .filter((order) => order.status === "delivered")
    .reduce((acc, order) => acc + order.total, 0),
); // 6800
console.log(
  orders
    .filter((order) => order.status === "pending")
    .map((order) => order.customer),
); // ['Пётр', 'Иван']
