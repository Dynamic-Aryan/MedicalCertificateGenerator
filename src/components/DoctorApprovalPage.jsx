import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams hook from react-router-dom

const DoctorApprovalPage = () => {
  const { id } = useParams(); // Use the useParams hook to access the route parameters
  const [formDetails, setFormDetails] = useState(null); // State to store form details
  const [loading, setLoading] = useState(true); // State for loading status
  const [approving, setApproving] = useState(false); // State for button disabling during approval

  useEffect(() => {
    const fetchFormDetails = async () => {
      try {
        const response = await axios.get(
          `https://medicalcertificategenerationbackendnew.onrender.com/api/forms/${id}`
        ); // Fetch form details from API
        setFormDetails(response.data); // Save data to state
      } catch (error) {
        console.error("Error fetching form details:", error);
        alert("Failed to fetch form details.");
      } finally {
        setLoading(false); // Always stop loading
      }
    };

    fetchFormDetails();
  }, [id]); // Use only `id` as a dependency

  const handleApprove = async () => {
    try {
      setApproving(true); // Disable button during the API call
      await axios.put(
        `https://medicalcertificategenerationbackendnew.onrender.com/api/forms/approve/${id}`
      ); // Approve the form
      alert("Form approved successfully!");
    } catch (error) {
      console.error("Error approving form:", error);
      alert("Failed to approve the form.");
    } finally {
      setApproving(false); // Re-enable button after the call
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator
  }

  if (!formDetails) {
    return <p>Failed to load form details. Please try again.</p>; // Handle case when `formDetails` is null
  }

  return (
    <div>
      <h2>Review Sick Leave Form</h2>
      <p>
        <strong>Name:</strong> {formDetails.fullName}
      </p>
      <p>
        <strong>Email:</strong> {formDetails.email}
      </p>
      <p>
        <strong>Symptoms:</strong>{" "}
        {Array.isArray(formDetails.symptoms)
          ? formDetails.symptoms.join(", ")
          : "N/A"}
      </p>
      {/* Add other form fields here */}
      <button onClick={handleApprove} disabled={approving}>
        {approving ? "Approving..." : "Approve Form"}
      </button>
    </div>
  );
};

export default DoctorApprovalPage;
