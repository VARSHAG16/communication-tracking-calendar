import React, { useState } from 'react';

const CommunicationMethods = ({ companyName }) => {
  const [communicationMethod, setCommunicationMethod] = useState('');
  const [frequency, setFrequency] = useState('');
  const [communications, setCommunications] = useState([]);

  // Handle form submission for adding communication methods
  const handleAddCommunication = () => {
    const newCommunication = {
      method: communicationMethod,
      frequency: frequency,
    };
    setCommunications([...communications, newCommunication]);
    resetForm();
  };

  // Reset the form fields
  const resetForm = () => {
    setCommunicationMethod('');
    setFrequency('');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Manage Communication Methods for {companyName}</h2>
      
      {/* Add Communication Method Form */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Add Communication Method</h3>
        <form className="space-y-4">
          <select
            value={communicationMethod}
            onChange={(e) => setCommunicationMethod(e.target.value)}
            className="p-2 border w-full"
          >
            <option value="">Select Method</option>
            <option value="LinkedIn Post">LinkedIn Post</option>
            <option value="Email">Email</option>
            <option value="Phone Call">Phone Call</option>
            <option value="Text Message">Text Message</option>
          </select>
          <input
            type="text"
            placeholder="Frequency (e.g., Weekly, Monthly)"
            className="p-2 border w-full"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
          <button
            type="button"
            className="p-2 bg-blue-500 text-white"
            onClick={handleAddCommunication}
          >
            Add Communication Method
          </button>
        </form>
      </div>

      {/* Display Communication Methods */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Communication Methods</h3>
        <ul className="space-y-4">
          {communications.map((comm, index) => (
            <li key={index} className="p-4 border">
              <p><strong>Method:</strong> {comm.method}</p>
              <p><strong>Frequency:</strong> {comm.frequency}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunicationMethods;
