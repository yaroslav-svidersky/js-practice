const orders = [
  { id: 1, customer: "Анна", total: 1200, status: "delivered" },
  { id: 2, customer: "Иван", total: 450, status: "cancelled" },
  { id: 3, customer: "Анна", total: 3100, status: "delivered" },
  { id: 4, customer: "Пётр", total: 780, status: "pending" },
  { id: 5, customer: "Мария", total: 2500, status: "delivered" },
  { id: 6, customer: "Иван", total: 990, status: "pending" },
];

function getTopOrders(orders, n) {
  const copyOrders = [...orders];
  return copyOrders.sort(({ total: a }, { total: b }) => b - a).slice(0, n);
}

function markDelivered(orders, id) {
  return orders.map((order) =>
    order.id === id ? { ...order, status: "delivered" } : { ...order },
  );
}

const topOrders = getTopOrders(orders, 2);
const updated = markDelivered(orders, 4);
console.log(topOrders); // [ { id: 3, ... }, { id: 5, ... } ]
console.log(updated); // [ { id: 1, ... }, { id: 2, ... }, { id: 3, ... }, { id: 4, ..., status: 'delivered' }, { id: 5, ... }, { id: 6, ... } ]
console.log(orders); // orders без изменений
