// src/Form.js
import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    address: "",
    employer: "",
    symptoms: "",
    duration: "",
    medicalHistory: "",
    medications: "",
    emergencyTreatment: "",
    previousSurgeries: "",
    familyHistory: "",
    environmentalCause: "",
    severity: "",
    consultationStatus: "",
    certificatePurpose: "",
    sickLeaveDates: "",
    specificInstructions: "",
    approvalStatus: "Pending",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "symptoms") {
      // handle symptoms as a list of strings
      setFormData({ ...formData, symptoms: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://medicalcertificategenerationbackendnew.onrender.com/api/forms/submit", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response);
        alert("Your form is has been submitted successfully");
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Medical Certificate Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-600">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-600">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-600">Gender:</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-600">Address:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Employer */}
        <div>
          <label className="block text-gray-600">Employer:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="employer"
            value={formData.employer}
            onChange={handleChange}
          />
        </div>

        {/* Symptoms */}
        <div>
          <label className="block text-gray-600">Symptoms:</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            multiple // This allows multiple selections
            required
          >
            <option value="fever">Fever</option>
            <option value="cough">Cough</option>
            <option value="headache">Headache</option>
            <option value="fatigue">Fatigue</option>
            <option value="soreThroat">Sore Throat</option>
            <option value="bodyAches">Body Aches</option>
            <option value="shortnessOfBreath">Shortness of Breath</option>
            <option value="lossOfTaste">Loss of Taste</option>
            <option value="nausea">Nausea</option>
            <option value="vomiting">Vomiting</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-600">Duration of Illness:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>

        {/* Medical History */}
        <div>
          <label className="block text-gray-600">Medical History:</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            required
          />
        </div>

        {/* Medications */}
        <div>
          <label className="block text-gray-600">Medications:</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            required
          />
        </div>

        {/* Emergency Treatment */}
        <div>
          <label className="block text-gray-600">Emergency Treatment:</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="emergencyTreatment"
            value={formData.emergencyTreatment}
            onChange={handleChange}
            required
          />
        </div>

        {/* Previous Surgeries */}
        <div>
          <label className="block text-gray-600">Previous Surgeries:</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="previousSurgeries"
            value={formData.previousSurgeries}
            onChange={handleChange}
            required
          />
        </div>

        {/* Family History */}
        <div>
          <label className="block text-gray-600">Family History:</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleChange}
            required
          />
        </div>

        {/* Environmental Cause */}
        <div>
          <label className="block text-gray-600">
            Environmental Cause (if any):
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="environmentalCause"
            value={formData.environmentalCause}
            onChange={handleChange}
          />
        </div>

        {/* Severity */}
        <div>
          <label className="block text-gray-600">Severity:</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            required
          >
            <option value="">Select Severity</option>
            <option value="Mild">Mild</option>
            <option value="Moderate">Moderate</option>
            <option value="Severe">Severe</option>
          </select>
        </div>

        {/* Consultation Status */}
        <div>
          <label className="block text-gray-600">Consultation Status:</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="consultationStatus"
            value={formData.consultationStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Consulted">Consulted</option>
            <option value="Not Consulted">Not Consulted</option>
          </select>
        </div>

        {/* Certificate Purpose */}
        <div>
          <label className="block text-gray-600">Certificate Purpose:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="certificatePurpose"
            value={formData.certificatePurpose}
            onChange={handleChange}
            required
          />
        </div>

        {/* Sick Leave Dates */}
        <div>
          <label className="block text-gray-600">Sick Leave Dates:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="sickLeaveDates"
            value={formData.sickLeaveDates}
            onChange={handleChange}
            required
          />
        </div>

        {/* Specific Instructions */}
        <div>
          <label className="block text-gray-600">Specific Instructions:</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="specificInstructions"
            value={formData.specificInstructions}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
