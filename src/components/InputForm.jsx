import React, { useState } from "react";

const InputForm = ({ addOrder }) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [item, setItem] = useState("");
  const [option, setOption] = useState("");
  const [tableNumber, setTableNumber] = useState(1); // Default to Table 1

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new order object with the form data
    const newOrder = {
      orderId,
      price,
      item,
      option,
      tableNumber, // Include table number in the order
    };
    // Call the addOrder function from props to pass the new order to the parent component
    addOrder(newOrder);
    // Reset the form fields
    setOrderId("");
    setPrice("");
    setItem("");
    setOption("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Unique order Id:
        </label>
        <input
          type="text"
          className="form-control"
          id="id"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Choose Price:
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="item" className="form-label">
          Choose Dish:
        </label>
        <input
          type="text"
          className="form-control"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="select" className="form-label">
          Select Table:
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="select"
          value={tableNumber}
          onChange={(e) => setTableNumber(parseInt(e.target.value))}
        >
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success">
        Add to bill
      </button>
    </form>
  );
};

export default InputForm;
