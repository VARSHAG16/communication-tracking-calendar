// src/components/CompanyManagement.js
import React, { useState } from 'react';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');

  const handleAddCompany = () => {
    setCompanies([
      ...companies,
      { name: companyName, location: companyLocation },
    ]);
    setCompanyName('');
    setCompanyLocation('');
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold">Manage Companies</h3>
      <div className="mb-4">
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={companyLocation}
          onChange={(e) => setCompanyLocation(e.target.value)}
          placeholder="Company Location"
          className="border p-2"
        />
        <button
          onClick={handleAddCompany}
          className="ml-4 bg-blue-500 text-white p-2"
        >
          Add Company
        </button>
      </div>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company.name} - {company.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
