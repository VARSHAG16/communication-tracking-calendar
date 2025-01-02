import React, { useState } from "react";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ManageCommunicationMethods = () => {
  const [methodName, setMethodName] = useState("");
  const [description, setDescription] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);
  const [communicationMethods, setCommunicationMethods] = useState([]);

  const handleAddMethod = () => {
    const newMethod = {
      methodName,
      description,
      activeStatus,
    };
    setCommunicationMethods([...communicationMethods, newMethod]);
    clearForm();
  };

  const clearForm = () => {
    setMethodName("");
    setDescription("");
    setActiveStatus(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Communication Methods</h2>
      <div>
        <TextField
          label="Communication Method Name"
          variant="outlined"
          fullWidth
          value={methodName}
          onChange={(e) => setMethodName(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Active Status"
          variant="outlined"
          fullWidth
          value={activeStatus}
          onChange={(e) => setActiveStatus(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <Button variant="contained" color="primary" onClick={handleAddMethod}>
          Add Communication Method
        </Button>
      </div>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Method Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Active Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {communicationMethods.map((method, index) => (
              <TableRow key={index}>
                <TableCell>{method.methodName}</TableCell>
                <TableCell>{method.description}</TableCell>
                <TableCell>{method.activeStatus ? "Active" : "Inactive"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageCommunicationMethods;
