import React, { useState } from 'react';

function WhoisForm({ fetchWhoisData, infoType, setInfoType }) {
  const [domain, setDomain] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWhoisData(domain, infoType);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
          Domain Name
        </label>
        <input
          type="text"
          id="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="infoType" className="block text-sm font-medium text-gray-700">
          Information Type
        </label>
        <select
          id="infoType"
          value={infoType}
          onChange={(e) => setInfoType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="domain">Domain Information</option>
          <option value="contact">Contact Information</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Lookup
        </button>
      </div>
    </form>
  );
}

export default WhoisForm;
