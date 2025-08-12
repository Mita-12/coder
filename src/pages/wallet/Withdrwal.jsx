import React, { useState } from 'react';
import { FiCreditCard } from 'react-icons/fi';
import { RiExchangeLine } from 'react-icons/ri';
import { FaWallet, FaArrowUp } from 'react-icons/fa';

const AddMoney = () => {
  // Payment methods data
  const paymentMethods = [
    {
      method: 'Credit/Debit Card',
      icon: <FiCreditCard className="text-lg" />,
      description: 'Instant transfer'
    },
    {
      method: 'UPI',
      icon: <RiExchangeLine className="text-lg" />,
      description: 'Fastest option'
    },
    {
      method: 'Net Banking',
      icon: <FaWallet className="text-lg" />,
      description: 'Direct bank transfer'
    }
  ];

  // State management
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1000); // Example balance

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount < 100 || !selectedMethod) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setWalletBalance(prev => prev + parseFloat(amount));
      setIsLoading(false);
      setAmount('');
      setSelectedMethod('');
      alert(`Successfully added ₹${amount} to your wallet!`);
    }, 1500);
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(value).replace('₹', '₹ ');
  };

  return (
    <div id="add-money-form" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-100 rounded-lg text-green-600 mt-1">
            <FaArrowUp className="text-lg" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Add Money to Wallet</h2>
            <p className="text-sm text-gray-500 mt-1">Instantly add funds using your preferred payment method</p>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-2 rounded-lg">
          <span className="text-sm font-medium text-gray-600">Current Balance:</span>
          <span className="text-sm font-semibold text-gray-800 ml-2">
            {formatCurrency(walletBalance)}
          </span>
        </div>
      </div>

      {/* Add Money Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Amount Input */}
        <div>
          <label htmlFor="add-amount" className="block text-sm font-medium text-gray-700 mb-2">
            Amount to Add
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
            <input
              id="add-amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => {
                const value = parseFloat(e.target.value) || '';
                setAmount(value);
              }}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium"
              min="100"
              step="100"
              required
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
              INR
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">Minimum ₹100</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAmount(500)}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-gray-700"
              >
                ₹500
              </button>
              <button
                type="button"
                onClick={() => setAmount(1000)}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-gray-700"
              >
                ₹1000
              </button>
              <button
                type="button"
                onClick={() => setAmount(2000)}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-gray-700"
              >
                ₹2000
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Payment Method
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {paymentMethods.map((option) => (
              <div
                key={option.method}
                onClick={() => setSelectedMethod(option.method)}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedMethod === option.method
                  ? 'border-green-500 bg-green-50 ring-1 ring-green-200'
                  : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${selectedMethod === option.method
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{option.method}</h3>
                    <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={!amount || amount < 100 || !selectedMethod || isLoading}
            className={`w-full py-3.5 px-4 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${!amount || amount < 100 || !selectedMethod || isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-md hover:shadow-lg'
              }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Payment...
              </>
            ) : (
              <>
                <FaArrowUp className="text-base" />
                {amount >= 100 ? (
                  `Add ${formatCurrency(amount)}`
                ) : (
                  'Enter amount to add'
                )}
              </>
            )}
          </button>
        </div>
      </form>

      {/* Additional Information */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Note:</h3>
        <ul className="text-xs text-gray-500 space-y-1 list-disc pl-5">
          <li>Minimum amount to add is ₹100</li>
          <li>Amount will be credited to your wallet immediately</li>
          <li>Standard payment gateway charges may apply</li>
        </ul>
      </div>
    </div>
  );
};

export default AddMoney;