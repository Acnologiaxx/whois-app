import React from "react";

function WhoisInfo({ data, infoType }) {
  if (!data) return null;

  if (infoType === 'domain') {
    const { domainName, registrarName, createdDate, expiresDate, strippedText } = data;
    const estimatedDomainAge = calculateDomainAge(createdDate);
    const nameServers =
      strippedText[0]
        .match(/Name Server:\s*(\S+)/g)
        ?.map((ns) => ns.split(":")[1].trim()) || [];

    return (
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Domain Information
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Domain Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Registrar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Registration Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiration Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estimated Domain Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hostnames
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {domainName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {registrarName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {createdDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {expiresDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {estimatedDomainAge}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <ul>
                  {nameServers.map((ns) => (
                    <li key={ns}>{ns}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else if (infoType === 'contact') {
    const { registrant, technicalContact, administrativeContact, contactEmail } = data;
    console.log(data)
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Contact Information
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Registrant Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Technical Contact Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Administrative Contact Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {registrant[0].name[0]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {technicalContact[0].name[0]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {administrativeContact[0].name[0]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contactEmail}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

function calculateDomainAge(createdDate) {
  const created = new Date(createdDate);
  const now = new Date();
  const age = now.getFullYear() - created.getFullYear();
  return age;
}

export default WhoisInfo;
