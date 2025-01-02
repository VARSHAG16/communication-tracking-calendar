import React, { useState } from 'react';
import CommunicationMethods from './CommunicationMethods';

const AdminPage = () => {
  const [companies, setCompanies] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyLinkedIn, setCompanyLinkedIn] = useState('');
  const [companyEmails, setCompanyEmails] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyComments, setCompanyComments] = useState('');
  const [companyPeriodicity, setCompanyPeriodicity] = useState('');

  // Handle form submission to add a new company
  const handleAddCompany = () => {
    const newCompany = {
      name: companyName,
      location: companyLocation,
      linkedin: companyLinkedIn,
      emails: companyEmails.split(','),
      phone: companyPhone.split(','),
      comments: companyComments,
      periodicity: companyPeriodicity,
    };
    setCompanies([...companies, newCompany]);
    resetForm();
  };

  // Reset the form fields
  const resetForm = () => {
    setCompanyName('');
    setCompanyLocation('');
    setCompanyLinkedIn('');
    setCompanyEmails('');
    setCompanyPhone('');
    setCompanyComments('');
    setCompanyPeriodicity('');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Admin - Manage Companies</h2>
      
      {/* Add New Company Form */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Add New Company</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            className="p-2 border w-full"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="p-2 border w-full"
            value={companyLocation}
            onChange={(e) => setCompanyLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="LinkedIn Profile URL"
            className="p-2 border w-full"
            value={companyLinkedIn}
            onChange={(e) => setCompanyLinkedIn(e.target.value)}
          />
          <input
            type="text"
            placeholder="Emails (comma separated)"
            className="p-2 border w-full"
            value={companyEmails}
            onChange={(e) => setCompanyEmails(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Numbers (comma separated)"
            className="p-2 border w-full"
            value={companyPhone}
            onChange={(e) => setCompanyPhone(e.target.value)}
          />
          <textarea
            placeholder="Comments"
            className="p-2 border w-full"
            value={companyComments}
            onChange={(e) => setCompanyComments(e.target.value)}
          />
          <input
            type="text"
            placeholder="Communication Periodicity"
            className="p-2 border w-full"
            value={companyPeriodicity}
            onChange={(e) => setCompanyPeriodicity(e.target.value)}
          />
          <button
            type="button"
            className="p-2 bg-blue-500 text-white"
            onClick={handleAddCompany}
          >
            Add Company
          </button>
        </form>
      </div>

      {/* Display Added Companies */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Companies List</h3>
        <ul className="space-y-4">
          {companies.map((company, index) => (
            <li key={index} className="p-4 border">
              <h4 className="font-bold">{company.name}</h4>
              <p><strong>Location:</strong> {company.location}</p>
              <p><strong>LinkedIn:</strong> <a href={company.linkedin} target="_blank" rel="noopener noreferrer">{company.linkedin}</a></p>
              <p><strong>Emails:</strong> {company.emails.join(', ')}</p>
              <p><strong>Phone:</strong> {company.phone.join(', ')}</p>
              <p><strong>Comments:</strong> {company.comments}</p>
              <p><strong>Communication Periodicity:</strong> {company.periodicity}</p>
              <button className="p-2 bg-green-500 text-white">
                Manage Communication Methods
              </button>
              <CommunicationMethods companyName={company.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
