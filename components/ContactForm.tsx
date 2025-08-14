"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    department: "",
    interest: "",
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    title: "",
    phone: "",
    note: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true);
        setFormData({
          department: "",
          interest: "",
          firstName: "",
          lastName: "",
          organization: "",
          email: "",
          title: "",
          phone: "",
          note: "",
        });
        setTimeout(() => setShowSuccess(false), 3000); // disparaît après 3s
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ An error occurred.");
    }
  };

  return (
    <div className="relative">
      {/* Notification succès */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in-up">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="text-gray-600">
              Thank you for contacting us. We will reply shortly.
            </p>
          </div>
        </div>
      )}

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="sm:max-w-5xl max-w-md mx-auto p-4 text-start space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {/* Select Department */}
          <div>
            <label className="block text-xl font-medium mb-1">Department</label>
            <select
              name="department"
              onChange={handleChange}
              value={formData.department}
              className="w-full border-2 rounded p-5 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            >
              <option value="">Select department</option>
              <option value="sales">Sales</option>
              <option value="recruiting">Recruiting</option>
              <option value="pr">PR</option>
              <option value="vendor relations">Vendor Relations</option>
              <option value="marketing">Marketing</option>
              <option value="support">Support</option>
            </select>
          </div>

          {/* Select Interest */}
          <div>
            <label className="block text-xl font-medium mb-1">Interest</label>
            <select
              name="interest"
              onChange={handleChange}
              value={formData.interest}
              className="w-full border-2 rounded p-5 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            >
              <option value="">Select interest</option>
              <option value="home to school">Home to School</option>
              <option value="special education transportation">
                Special Education Transportation
              </option>
              <option value="transportation technology">
                Transportation Technology
              </option>
              <option value="charter">Charter</option>
              <option value="athletic">Athletic</option>
              <option value="field trip transportation">
                Field Trip Transportation
              </option>
              <option value="vendor partnership">
                I&quote;m a vendor interested in partnering with KTS Mobility
              </option>
            </select>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-xl font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xl font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block text-xl font-medium mb-1">
              Organization
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xl font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Title/Role */}
          <div>
            <label className="block text-xl font-medium mb-1">
              Title / Role
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xl font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="block text-xl font-medium mb-1">Note</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="w-full border-2 rounded p-8 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            rows={8}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="border-t pt-4 mt-20 border-gray-500 h-[200px]">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-15 py-3 mt-2 rounded-full"
          >
            Submit
          </button>

          <p className="text-xl mt-8">
            By clicking &quot;submit&quot;, I agree to KTSMobility{" "}
            <u>Terms of Service</u> and <u>Privacy Policy</u>.
          </p>
        </div>
      </form>

      {/* Animation Tailwind (à ajouter dans global.css ou styles.css) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
