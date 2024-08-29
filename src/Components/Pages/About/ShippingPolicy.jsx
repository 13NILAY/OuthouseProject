import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
  return (
    <div className="mt-20 px-sectionPadding max-sm:px-mobileScreenPadding py-16 bg-gray-100 text-typography">
      <h1 className="text-2xl font-headings font-semibold mb-4">Shipping and Delivery Policy</h1>
      <div className="text-sm font-texts /70 space-y-6">
        <section>
          <h2 className="text-lg font-semibold">1. Shipping Methods and Delivery Time</h2>
          <p>We offer the following shipping methods:</p>
          <ul className="list-disc list-inside">
            <li>Standard Shipping: 5-7 business days.</li>
            <li>Express Shipping: 2-3 business days.</li>
            <li>Overnight Shipping: 1 business day.</li>
          </ul>
          <p>Delivery times may vary depending on your location and the shipping method chosen.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">2. Shipping Costs</h2>
          <p>Shipping costs are calculated based on the weight of your order and the selected shipping method. The total shipping cost will be displayed at checkout before you complete your purchase.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">3. Order Processing Time</h2>
          <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">4. International Shipping</h2>
          <p>We currently offer international shipping to select countries. Please note that additional charges such as customs duties and taxes may apply, which are not included in our shipping costs and are the responsibility of the customer.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">5. Order Tracking</h2>
          <p>Once your order has been shipped, you will receive an email with your tracking number. You can track your order on the carrier's website using this number.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">6. Missing or Lost Packages</h2>
          <p>If you suspect your package is missing or lost, please contact our customer service team at nilayrathod129@gmail.com immediately. We will work with the carrier to resolve the issue.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">7. Returns and Refunds</h2>
          <p>If you wish to return a product, please review our <Link to="/refund-policy" className="hover:text-typography">Refund & Return Policy</Link> for detailed instructions.</p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
