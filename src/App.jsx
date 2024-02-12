import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/InputForm";
import Orders from "./components/Orders";
import Card from "./components/Card";
import Heading from "./components/Heading";
// import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  // Load orders from local storage when component mounts
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  // Function to add a new order to the orders state and save to local storage
  const addOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Function to delete an order from the orders state and save to local storage
  const deleteOrder = (orderToDelete) => {
    const updatedOrders = orders.filter((order) => order !== orderToDelete);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <Card>
      <Heading />
      <InputForm addOrder={addOrder} />
      <Orders orders={orders} deleteOrder={deleteOrder} />
    </Card>
  );
}

export default App;
