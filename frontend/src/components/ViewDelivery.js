// src/components/ViewDeliveries.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewDeliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/deliveries')
      .then((response) => {
        setDeliveries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/deliveries/${id}`)
      .then((response) => {
        setDeliveries(deliveries.filter(delivery => delivery._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Deliveries</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Delivery Date</th>
            <th>Delivery Address</th>
            <th>Delivery Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery._id}>
              <td>{delivery._id}</td>
              <td>{delivery.orderId}</td>
              <td>{new Date(delivery.deliveryDate).toLocaleDateString()}</td>
              <td>{delivery.deliveryAddress}</td>
              <td>{delivery.deliveryFee}</td>
              <td>
                <button onClick={() => handleDelete(delivery._id)} className="btn btn-danger">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDeliveries;
