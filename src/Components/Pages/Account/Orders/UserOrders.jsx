import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate'

const UserOrders = () => {
  const axiosPrivate = useAxiosPrivate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosPrivate.get('/user/orders'); // Example endpoint to get user-specific orders
        setOrders(response.data.orders);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

//   if (!orders.length) return <p>No orders found.</p>;

  return (
    <div className='w-full mt-10'>
      <h2 className='text-3xl font-semibold mb-6'>My Orders</h2>
      <div className='flex flex-col gap-4'>
        {orders.map(order => (
          <div key={order._id} className='border p-4 rounded-md shadow-md'>
            <h3 className='text-xl font-semibold'>Order ID: {order._id}</h3>
            <p className='text-lg'>Status: {order.orderStatus}</p>
            <p className='text-lg'>Total Amount: ₹{order.totalAmount}</p>
            <p className='text-lg'>Payment Status: {order.paymentStatus}</p>
            <p className='text-lg'>Ordered At: {new Date(order.createdAt).toLocaleDateString()}</p>
            <div className='mt-3'>
              <h4 className='text-lg font-semibold'>Items:</h4>
              <ul className='list-disc list-inside'>
                {order.items.map(item => (
                  <li key={item.productId}>
                    Product ID: {item.productId}, Quantity: {item.quantity}, Price: ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
