import React from "react";

const Orders = ({ orders, deleteOrder }) => {
  // Filter orders for each table
  const table1Orders = orders.filter((order) => order.tableNumber === 1);
  const table2Orders = orders.filter((order) => order.tableNumber === 2);
  const table3Orders = orders.filter((order) => order.tableNumber === 3);

  return (
    <div>
      <h4>ORDERS:</h4>
      <div>
        <h5>Table 1</h5>
        <ul>
          {table1Orders.map((order, index) => (
            <li key={index}>
              {order.orderId}, {order.price}, {order.item}, {order.option}
              <button onClick={() => deleteOrder(order)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5>Table 2</h5>
        <ul>
          {table2Orders.map((order, index) => (
            <li key={index}>
              {order.orderId}, {order.price}, {order.item}, {order.option}
              <button onClick={() => deleteOrder(order)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5>Table 3</h5>
        <ul>
          {table3Orders.map((order, index) => (
            <li key={index}>
              {order.orderId}, {order.price}, {order.item}, {order.option}
              <button onClick={() => deleteOrder(order)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
