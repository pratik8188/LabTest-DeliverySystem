import React, { useState } from 'react';
import axios from 'axios';

function AddDelivery() {
  const [formData, setFormData] = useState({
    orderId: '',
    deliveryDate: '',
    deliveryAddress: '',
    deliveryFee: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/deliveries/add', formData)
      .then((response) => {
        console.log(response.data);
        alert('Delivery added successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error adding delivery');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Order ID</label>
        <input type="text" className="form-control" name="orderId" value={formData.orderId} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Delivery Date</label>
        <input type="date" className="form-control" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Delivery Address</label>
        <input type="text" className="form-control" name="deliveryAddress" value={formData.deliveryAddress} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Delivery Fee</label>
        <input type="number" className="form-control" name="deliveryFee" value={formData.deliveryFee} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Add Delivery</button>
    </form>
  );
}

export default AddDelivery;
