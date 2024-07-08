import React, { useState } from "react";
import WhoisForm from "./WhoisForm";
import WhoisInfo from "./WhoisInfo";
import axios from "axios";
import xml2js from "xml2js";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [infoType, setInfoType] = useState('domain');

  const fetchWhoisData = async (domain, infoType) => {
    try {
      const response = await axios.get(
        `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.REACT_APP_API_KEY}&domainName=${domain}&infoType=${infoType}`,
        { headers: { Accept: "application/xml" } }
      );
      const result = await xml2js.parseStringPromise(response.data);
      setData(result.WhoisRecord);
      setError(null);
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
      setData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Whois Lookup</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-2">
        <WhoisForm fetchWhoisData={fetchWhoisData} infoType={infoType} setInfoType={setInfoType} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
      {data && (
        <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6">
          <WhoisInfo data={data} infoType={infoType} />
        </div>
      )}
    </div>
  );
}

export default App;
