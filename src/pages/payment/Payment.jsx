import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Payment() {
  let totalAmount =  100;
  const transaction_uuid = uuidv4();
  let message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  var hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Payment Information
        </h2>

        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={totalAmount}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="tax_amount"
              className="block text-sm font-medium text-gray-700"
            >
              Tax Amount
            </label>
            <input
              type="text"
              id="tax_amount"
              name="tax_amount"
              value="0"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="total_amount"
              className="block text-sm font-medium text-gray-700"
            >
              Total Amount
            </label>
            <input
              type="text"
              id="total_amount"
              name="total_amount"
              value={totalAmount}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="transaction_uuid"
              className="block text-sm font-medium text-gray-700"
            >
              Transaction UUID
            </label>
            <input
              type="text"
              id="transaction_uuid"
              name="transaction_uuid"
              value={transaction_uuid}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="product_code"
              className="block text-sm font-medium text-gray-700"
            >
              Product Code
            </label>
            <input
              type="text"
              id="product_code"
              name="product_code"
              value="EPAYTEST"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="product_service_charge"
              className="block text-sm font-medium text-gray-700"
            >
              Product Service Charge
            </label>
            <input
              type="text"
              id="product_service_charge"
              name="product_service_charge"
              value="0"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="product_delivery_charge"
              className="block text-sm font-medium text-gray-700"
            >
              Product Delivery Charge
            </label>
            <input
              type="text"
              id="product_delivery_charge"
              name="product_delivery_charge"
              value="0"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="success_url"
              className="block text-sm font-medium text-gray-700"
            >
              Success URL
            </label>
            <input
              type="text"
              id="success_url"
              name="success_url"
              value="https://developer.esewa.com.np/success"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="failure_url"
              className="block text-sm font-medium text-gray-700"
            >
              Failure URL
            </label>
            <input
              type="text"
              id="failure_url"
              name="failure_url"
              value="https://developer.esewa.com.np/failure"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="signed_field_names"
              className="block text-sm font-medium text-gray-700"
            >
              Signed Field Names
            </label>
            <input
              type="text"
              id="signed_field_names"
              name="signed_field_names"
              value="total_amount,transaction_uuid,product_code"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="signature"
              className="block text-sm font-medium text-gray-700"
            >
              Signature
            </label>
            <input
              type="text"
              id="signature"
              name="signature"
              value={hashInBase64}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
