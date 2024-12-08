import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductImage1 from "../../assets/shirt/shirt2.png";
import ProductImage2 from "../../assets/women/women2.jpg";

const Cart = () => {
  const navigate = useNavigate();

  // Sample cart items, replace this with your actual cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      count: 2,
      image: ProductImage1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      count: 1,
      image: ProductImage2,
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, count: item.count + 1 } : item));
  };

  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleApplyCoupon = () => {
    // Example coupon logic
    if (coupon === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  const discountAmount = (totalPrice * discount) / 100;
  const gst = (totalPrice - discountAmount) * 0.18;
  const deliveryCharges = 50;
  const finalTotal = totalPrice - discountAmount + gst + deliveryCharges;

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 p-4 border-b border-gray-300 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">Price: ${item.price}</p>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleDecrease(item.id)} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">-</button>
                      <p className="text-gray-600 dark:text-gray-400">{item.count}</p>
                      <button onClick={() => handleIncrease(item.id)} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">+</button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold">Total: ${item.price * item.count}</p>
                  <button onClick={() => handleRemove(item.id)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Apply Coupon</h2>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="px-4 py-2 border rounded"
              />
              <button onClick={handleApplyCoupon} className="px-4 py-2 bg-blue-500 text-white rounded">Apply</button>
            </div>
          </div>
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">Total Items: {totalItems}</h2>
            <h2 className="text-xl font-bold">Total Price: ${totalPrice}</h2>
            <h2 className="text-xl font-bold">Discount: ${discountAmount}</h2>
            <h2 className="text-xl font-bold">GST (18%): ${gst.toFixed(2)}</h2>
            <h2 className="text-xl font-bold">Delivery Charges: ${deliveryCharges}</h2>
            <h2 className="text-2xl font-bold">Final Total: ${finalTotal.toFixed(2)}</h2>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400">Add items to your cart to see them here.</p>
        </div>
      )}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/items")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add More Items
        </button>
        <button
          onClick={() => navigate("/address")}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Proceed to Address
        </button>
      </div>
    </div>
  );
};

export default Cart;
