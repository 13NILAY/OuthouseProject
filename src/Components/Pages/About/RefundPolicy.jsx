import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="mt-20 px-sectionPadding max-md:px-mobileScreenPadding py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headings text-3xl font-bold text-gray-800 mb-6">Returns & Refund Policy</h1>
        <p className="font-texts text-lg text-gray-700 mb-4">
          At [Your Company Name], we strive to ensure that our customers are completely satisfied with their purchases. If for any reason you are not satisfied with a product you have purchased from us, we offer a straightforward return and refund process.
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mb-4">Returns</h2>
        <p className="font-texts text-lg text-gray-700 mb-4">
          You may return any item purchased from us within [Number of Days] days of receiving it, provided the item is unused, in its original packaging, and in the same condition in which it was received. To initiate a return, please contact our customer service team at [Customer Service Email] with your order number and reason for the return.
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mb-4">Refunds</h2>
        <p className="font-texts text-lg text-gray-700 mb-4">
          Once we receive and inspect your returned item, we will notify you of the status of your refund. If approved, your refund will be processed, and a credit will be applied to your original method of payment within [Number of Days] days.
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mb-4">Exchanges</h2>
        <p className="font-texts text-lg text-gray-700 mb-4">
          We only replace items if they are defective or damaged. If you need to exchange an item, please contact us at [Customer Service Email] with details of the issue.
        </p>
        <p className="font-texts text-lg text-gray-700 mb-4">
          If you have any further questions about our returns and refund policy, please do not hesitate to contact us at [Your Email Address].
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
