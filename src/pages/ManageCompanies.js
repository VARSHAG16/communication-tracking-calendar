// src/components/ManageCompanies.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany, removeCompany } from '../redux/actions/companyActions';

const ManageCompanies = () => {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [linkedInURL, setLinkedInURL] = useState('');
  const [emails, setEmails] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [comments, setComments] = useState('');
  const [communicationPeriodicity, setCommunicationPeriodicity] = useState('');

  // Accessing companies from Redux store with a safeguard to prevent undefined access
  const companies = useSelector((state) => state.companies?.companies || []); // Use optional chaining (?.) and default to an empty array

  const dispatch = useDispatch();

  const handleAddCompany = () => {
    const newCompany = {
      id: new Date().getTime(),
      name: companyName,
      location,
      linkedInURL,
      emails: emails.split(','),
      phoneNumbers: phoneNumbers.split(','),
      comments,
      communicationPeriodicity,
    };
    dispatch(addCompany(newCompany)); // Dispatch the add company action
  };

  const handleRemoveCompany = (companyId) => {
    dispatch(removeCompany(companyId)); // Dispatch the remove company action
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Manage Companies</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="LinkedIn URL"
          value={linkedInURL}
          onChange={(e) => setLinkedInURL(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Emails"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Phone Numbers"
          value={phoneNumbers}
          onChange={(e) => setPhoneNumbers(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Communication Periodicity"
          value={communicationPeriodicity}
          onChange={(e) => setCommunicationPeriodicity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddCompany}>
          Add Company
        </button>
      </div>

      <h2 className="mb-4">Companies List</h2>
      <ul className="list-group">
        {companies.map((company) => (
          <li key={company.id} className="list-group-item d-flex justify-content-between align-items-center">
            <h3>{company.name}</h3>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveCompany(company.id)}
            >
              Remove Company
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCompanies;
